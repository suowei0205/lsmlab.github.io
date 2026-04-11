#!/bin/bash

# 一键部署脚本：将当前源码（source-backup 分支）构建后推送到 main 分支（GitHub Pages）

set -e  # 遇到错误立即退出

echo "🚀 开始部署流程..."

# 1. 确保当前在项目根目录（包含 package.json）
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在项目根目录（包含 package.json）下运行此脚本"
    exit 1
fi

# 2. 记录当前分支名，以便最后切回
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 当前分支：$CURRENT_BRANCH"

# 3. 暂存未提交的更改（如果有）
if ! git diff --quiet || ! git diff --cached --quiet; then
    echo "📦 检测到未提交的更改，自动暂存..."
    git stash push -m "deploy-stash-$(date +%s)"
    STASHED=true
fi

# 4. 构建项目（生成 dist）
echo "🔨 正在构建项目..."
npm run build

if [ ! -d "dist" ] || [ -z "$(ls -A dist)" ]; then
    echo "❌ 构建失败：dist 文件夹为空或不存在"
    exit 1
fi

# 5. 确保源码分支已是最新（可选的 push，但不强制）
echo "📤 确保当前源码分支已推送到远程..."
git push -u origin "$CURRENT_BRANCH" --force-with-lease

# 6. 切换到 main 分支（如果不存在则创建）
echo "🔄 切换到 main 分支..."
if git show-ref --verify --quiet refs/heads/main; then
    git checkout main
else
    git checkout -b main
fi

# 8. 将 dist 内容复制到根目录
echo "📋 复制构建产物..."
cp -r ../dist/* ./   # 注意：因为此时在 main 分支，dist 在上一级目录（项目根目录）
if [ -f "../dist/.nojekyll" ]; then
    cp ../dist/.nojekyll ./
fi

# 9. 提交并强制推送到远程 main
echo "📤 提交并推送更新..."
git add -A
git commit -m "自动部署: $(date '+%Y-%m-%d %H:%M:%S')"
git push -f origin main

# 10. 切回原来的分支
echo "🔁 切回原分支：$CURRENT_BRANCH"
git checkout "$CURRENT_BRANCH"

# 11. 恢复暂存的更改（如果有）
if [ "$STASHED" = true ]; then
    echo "🔄 恢复之前的工作区更改..."
    git stash pop
fi

echo "✅ 部署完成！网站将在 1-2 分钟内更新：https://lsmlab.github.io/"