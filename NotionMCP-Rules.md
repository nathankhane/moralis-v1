# Notion MCP Integration Rules & Troubleshooting Guide

## 🎯 **The Problem We Solved**

When setting up Notion MCP integration with Cursor AI, you might encounter persistent `401 Unauthorized` errors even with a valid Notion integration token. This guide documents the exact problem, root cause, and solution.

## 🔍 **Root Cause Analysis**

### **The Bug**
The URL-based Notion MCP server (`https://mcp.notion.com/mcp`) has a **critical bug** where it fails to include the required `Authorization` header in API requests to the Notion API, resulting in consistent 401 errors despite having a valid integration token.

**Source**: [GitHub Issue #109](https://github.com/makenotion/notion-mcp-server/issues/109)

### **What Happens**
- Your Notion integration token is valid ✅
- Your MCP configuration looks correct ✅  
- But the MCP server doesn't send the `Authorization` header ❌
- Notion API rejects all requests with 401 Unauthorized ❌

## 🚀 **The Solution**

### **WRONG Configuration (Doesn't Work)**
```json
{
  "mcpServers": {
    "Notion": {
      "url": "https://mcp.notion.com/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_TOKEN_HERE"
      }
    }
  }
}
```

### **CORRECT Configuration (Works)**
```json
{
  "mcpServers": {
    "Notion": {
      "command": "npx",
      "args": ["-y", "@notionhq/notion-mcp-server"],
      "env": {
        "NOTION_TOKEN": "YOUR_NOTION_TOKEN_HERE"
      }
    }
  }
}
```

## 📋 **Step-by-Step Setup Guide**

### **1. Create Notion Integration**
1. Go to [notion.so/my-integrations](https://notion.so/my-integrations)
2. Click "New integration"
3. Name it (e.g., "Cursor AI Assistant")
4. Select your workspace
5. Copy the "Internal Integration Token" (starts with `ntn_` or `secret_`)

### **2. Give Integration Access**
1. Go to any Notion page in your workspace
2. Click "Share" in the top right
3. Click "Invite" and search for your integration name
4. Invite it to give access to that page/workspace

### **3. Configure Cursor MCP**
1. Open/create `~/.cursor/mcp.json`
2. Add the CORRECT configuration (see above)
3. Replace `YOUR_NOTION_TOKEN_HERE` with your actual token
4. Save the file

### **4. Restart Cursor**
- Completely quit and reopen Cursor
- The MCP configuration loads on startup

### **5. Test the Integration**
```javascript
// Test if it works - you should see your bot info
mcp_Notion_API-get-self()
```

## 🔧 **Troubleshooting**

### **Common Issues**

1. **Still getting 401 errors**
   - Make sure you're using the command-based config, not URL-based
   - Verify your token is correct (copy-paste from Notion)
   - Restart Cursor after config changes

2. **MCP tools not available**
   - Check if `mcp.json` syntax is valid JSON
   - Ensure Cursor has network access to download npm packages
   - Try running `npx @notionhq/notion-mcp-server` manually to test

3. **Permission errors**
   - Make sure your integration has access to the workspace/pages
   - Re-invite the integration to your Notion workspace if needed

### **Verification Commands**
```bash
# Test if the MCP server works standalone
npx @notionhq/notion-mcp-server

# Check your mcp.json syntax
cat ~/.cursor/mcp.json | jq .
```

## 📚 **Token Format Notes**

**Notion integration tokens can start with:**
- `ntn_` (newer format)
- `secret_` (older format)

Both formats work with the command-based configuration.

## 🎯 **What This Enables**

Once working, you can:
- ✅ Create pages automatically
- ✅ Update page content
- ✅ Search your workspace
- ✅ Manage databases
- ✅ Create comments
- ✅ Retrieve page properties

## 🚨 **Security Notes**

1. **Never share your integration token** in chat/public
2. **Store tokens securely** in environment variables
3. **Limit integration permissions** to only what you need
4. **Rotate tokens periodically** for security

## 📝 **Alternative Solutions**

If the official MCP server still doesn't work:

### **Option 1: Notion ReadOnly MCP Server**
```json
{
  "mcpServers": {
    "Notion": {
      "command": "npx",
      "args": ["-y", "notion-readonly-mcp-server"],
      "env": {
        "NOTION_TOKEN": "YOUR_TOKEN_HERE"
      }
    }
  }
}
```

### **Option 2: Custom Headers Approach**
```json
{
  "mcpServers": {
    "Notion": {
      "command": "npx",
      "args": ["-y", "@notionhq/notion-mcp-server"],
      "env": {
        "OPENAPI_MCP_HEADERS": "{\"Authorization\": \"Bearer YOUR_TOKEN\", \"Notion-Version\": \"2022-06-28\"}"
      }
    }
  }
}
```

## 🎉 **Success Indicators**

You know it's working when:
- `mcp_Notion_API-get-self()` returns your bot info
- You can see Notion tools in Cursor's available tools
- No more 401 unauthorized errors
- You can create/read pages successfully

## 📖 **References**

- [Notion MCP Server GitHub](https://github.com/makenotion/notion-mcp-server)
- [Bug Report Issue #109](https://github.com/makenotion/notion-mcp-server/issues/109)
- [Notion API Documentation](https://developers.notion.com/)
- [Cursor MCP Documentation](https://docs.cursor.com/)

---

**Created**: August 30, 2024  
**Status**: Tested and Working ✅  
**Use Case**: Bridge Marketing Site Automation  

*This guide solved persistent 401 errors by switching from URL-based to command-based MCP configuration.*

