#上传到源码仓库
git init
git add -A
git commit -m '修改上传说明'


# 部署到 https://<USERNAME>.github.io
git push -f git@github.com:lanzeweie/aurora-zhuti.git master


#下面是部署网页 上面是上传源码  使用一种之前在另一种的代码前面 #

# 当发生错误时中止脚本
# set -e

# 构建
# npm run build

# cd 到构建输出的目录下 
# cd dist

# 部署到自定义域名，没有自定义域名可注释掉
#echo 'chanshiyu.com' > CNAME

# git init
# git add -A
#git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:lanzeweie/au.github.io.git master

# cd -

