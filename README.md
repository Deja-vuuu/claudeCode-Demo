# MCP Demo 项目文档

## 项目概述

这是一个基于 Model Context Protocol (MCP) 的演示项目，集成了 MySQL 数据库和小红书 API 功能。

## 技术栈

- **MCP SDK**: @modelcontextprotocol/sdk ^1.24.3
- **数据库**: MySQL
- **包管理器**: pnpm

## 项目结构

```
mcp-demo/
├── .mcp.json              # MCP 服务器配置文件
├── package.json           # 项目依赖配置
├── pnpm-lock.yaml         # pnpm 锁定文件
├── node_modules/          # 依赖包目录
├── xhs.png               # 小红书相关图片资源
├── 800x.jpg              # 图片资源
└── 16975095706015501.jpg # 图片资源
```

## 配置说明

### MCP 服务器配置 (.mcp.json)

项目配置了 MySQL MCP 服务器，用于数据库操作：

```json
{
  "mcpServers": {
    "mysql": {
      "type": "stdio",
      "command": "uv",
      "args": [
        "--directory",
        "path/to/mysql_mcp_server",
        "run",
        "mysql_mcp_server"
      ],
      "env": {
        "MYSQL_HOST": "127.0.0.1",
        "MYSQL_PORT": "3306",
        "MYSQL_USER": "root",
        "MYSQL_PASSWORD": "12345678",
        "MYSQL_DATABASE": "my_db"
      }
    }
  }
}
```

### 环境变量

MySQL 连接配置：
- **MYSQL_HOST**: 127.0.0.1 (本地主机)
- **MYSQL_PORT**: 3306 (默认 MySQL 端口)
- **MYSQL_USER**: root
- **MYSQL_PASSWORD**: 12345678
- **MYSQL_DATABASE**: my_db

## 安装与使用

### 前置要求

- Node.js (建议 v16+)
- pnpm 包管理器
- MySQL 数据库
- uv 运行环境

### 安装步骤

1. 克隆项目到本地
```bash
git clone <repository-url>
cd mcp-demo
```

2. 安装依赖
```bash
pnpm install
```

3. 配置 MySQL 数据库
   - 确保 MySQL 服务正在运行
   - 创建数据库 `my_db`
   - 根据需要修改 `.mcp.json` 中的数据库连接信息

4. 配置 MCP 服务器路径
   - 修改 `.mcp.json` 中的 `path/to/mysql_mcp_server` 为实际的 MySQL MCP 服务器路径

### 启动项目

```bash
# 根据具体的启动脚本运行
pnpm start
```

## 功能特性

### 1. MySQL 数据库集成
- 通过 MCP 协议连接 MySQL 数据库
- 支持标准的数据库操作（查询、插入、更新、删除）

### 2. 小红书 API 集成
项目集成了小红书 MCP 服务器，支持以下功能：
- 检查登录状态 (`xhs_check_login_status`)
- 生成封面图 (`xhs_generate_cover`)
- 获取笔记详情 (`xhs_get_feed_detail`)
- 获取推荐内容 (`xhs_get_recommend_feeds`)
- 发表评论 (`xhs_post_comment`)
- 发布内容 (`xhs_publish_content`)
- 搜索内容 (`xhs_search_feeds`)

### 3. 图片资源管理
- 支持本地图片资源存储
- 图片格式：JPG、PNG

## API 使用示例

### 小红书内容发布

```javascript
// 发布图文内容到小红书
await xhs_publish_content({
  title: "标题",
  content: "内容正文",
  images: ["file:///path/to/image.png"],
  tags: ["标签1", "标签2"]
});
```

### 小红书内容搜索

```javascript
// 搜索小红书内容
await xhs_search_feeds({
  keyword: "搜索关键词",
  sort: "general" // general, popularity, time
});
```

## 数据库操作

通过 MCP MySQL 服务器可以执行标准 SQL 操作：

```sql
-- 查询示例
SELECT * FROM table_name;

-- 插入示例
INSERT INTO table_name (column1, column2) VALUES (value1, value2);

-- 更新示例
UPDATE table_name SET column1 = value1 WHERE condition;

-- 删除示例
DELETE FROM table_name WHERE condition;
```

## 注意事项

1. **安全性**
   - 不要将包含敏感信息的 `.mcp.json` 提交到版本控制系统
   - 建议使用环境变量或配置文件管理敏感信息
   - 定期更新数据库密码

2. **配置路径**
   - 确保 MCP 服务器路径配置正确
   - 图片路径使用绝对路径以避免路径错误

3. **依赖管理**
   - 使用 pnpm 作为包管理器确保依赖一致性
   - 定期更新依赖包以获取安全补丁

## 故障排查

### 常见问题

1. **MySQL 连接失败**
   - 检查 MySQL 服务是否运行
   - 验证 `.mcp.json` 中的数据库配置信息
   - 确认数据库用户权限

2. **MCP 服务器启动失败**
   - 检查 `uv` 命令是否可用
   - 验证 MCP 服务器路径是否正确
   - 查看错误日志获取详细信息

3. **小红书 API 调用失败**
   - 确认已登录小红书账号
   - 检查网络连接
   - 验证 API 参数格式

## 开发计划

- [ ] 添加更多数据库操作示例
- [ ] 完善错误处理机制
- [ ] 添加单元测试
- [ ] 优化图片上传流程
- [ ] 添加日志记录功能

## 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 许可证

请查看 LICENSE 文件了解详细信息。

## 联系方式

如有问题或建议，请通过以下方式联系：
- 提交 GitHub Issue
- 发送邮件至项目维护者

---

**最后更新**: 2025-12-10
# claudeCode-Demo
