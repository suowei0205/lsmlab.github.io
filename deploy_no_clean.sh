#!/bin/bash

# 自动部署脚本 - 去掉清空目录步骤（不再使用 rm -rf）
# 使用方法：在项目根目录下执行 bash deploy_no_clean.sh

set -e

echo "🚀 开始自动部署（无清空步骤）..."

# 1. 确保在项目根目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在项目根目录（包含 package.json）下运行此脚本"
    exit 1
fi

# 2. 暂存未提交的更改（可选）
if ! git diff --quiet || ! git diff --cached --quiet; then
    echo "📦 检测到未提交的更改，自动暂存..."
    git stash push -m "自动部署前的临时保存"
    STASHED=true
fi

# 3. 重新构建
echo "🔨 正在构建项目..."
npm run build

if [ ! -d "dist" ] || [ -z "$(ls -A dist)" ]; then
    echo "❌ 构建失败：dist 文件夹为空或不存在"
    exit 1
fi

# 4. 备份源码到 source-backup
echo "📁 备份源码到 source-backup 分支..."
git checkout -B source-backup
git add .
git commit -m "自动部署前备份源码 $(date '+%Y-%m-%d %H:%M:%S')" || echo "ℹ️  无新更改需提交"
git push -u origin source-backup --force-with-lease

# 5. 切换到 main 分支
echo "🔄 切换到 main 分支..."
git checkout main

# 6. ⚠️ 注意：这里不再执行 rm -rf 清空操作
#    而是直接用 dist 内容覆盖现有文件（已有文件会被替换，多余文件可能残留）
echo "📋 复制构建产物到根目录（覆盖模式）..."
cp -rf dist/* ./        # -f 强制覆盖，-r 递归目录
if [ -f "dist/.nojekyll" ]; then
    cp dist/.nojekyll ./
fi

# 7. 添加、提交并强制推送
echo "📤 提交并强制推送更新..."
git add -A
git commit -m "自动部署: $(date '+%Y-%m-%d %H:%M:%S')"
git push -f origin main

# 8. 恢复暂存（如果有）
if [ "$STASHED" = true ]; then
    echo "🔄 恢复之前的工作区更改..."
    git stash pop
fi

# 9. 切回源码分支
echo "🔁 切回源码分支 source-backup..."
git checkout source-backup

echo "✅ 部署完成！网站将在 1-2 分钟内更新：https://lsmlab.github.io/"