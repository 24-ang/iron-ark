# Gemini API 快速测试脚本 - 支持多模型
param(
    [Parameter(Mandatory = $true)]
    [string]$ApiKey,
    
    [Parameter(Mandatory = $false)]
    [string]$Model = "gemini-1.5-pro"
)

Write-Host "🧪 开始测试 Gemini API..." -ForegroundColor Yellow
Write-Host "📦 使用模型: $Model" -ForegroundColor Cyan

try {
    $body = @{
        contents = @(
            @{ parts = @(@{ text = "Say 'Hello from Iron Ark!'" }) }
        )
    } | ConvertTo-Json -Depth 5

    $uri = "https://generativelanguage.googleapis.com/v1beta/models/${Model}:generateContent?key=$ApiKey"
    
    Write-Host "🔗 请求 URL: $uri" -ForegroundColor Gray

    $response = Invoke-RestMethod `
        -Uri $uri `
        -Method Post `
        -ContentType "application/json" `
        -Body $body `
        -ErrorAction Stop

    Write-Host "`n✅ 测试成功！API 正常工作！" -ForegroundColor Green
    Write-Host "`n📝 AI 响应：" -ForegroundColor Cyan
    Write-Host $response.candidates[0].content.parts[0].text -ForegroundColor White
    Write-Host "`n🎯 下一步：将此 Key 添加到 .env.local 文件" -ForegroundColor Yellow
    Write-Host "   VITE_GEMINI_API_KEY=$ApiKey" -ForegroundColor White
    
}
catch {
    Write-Host "`n❌ 测试失败！" -ForegroundColor Red
    Write-Host "错误信息：" -ForegroundColor Yellow
    Write-Host $_.Exception.Message -ForegroundColor White
    
    if ($_.Exception.Message -match "429") {
        Write-Host "`n💡 解决方案：配额已用完，请创建新的 API Key 或等待配额重置" -ForegroundColor Cyan
    }
    elseif ($_.Exception.Message -match "400") {
        Write-Host "`n💡 解决方案：API Key 无效，请检查是否正确复制" -ForegroundColor Cyan
    }
    elseif ($_.Exception.Message -match "403") {
        Write-Host "`n💡 解决方案：需要启用 Generative Language API" -ForegroundColor Cyan
        Write-Host "   访问: https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com" -ForegroundColor White
    }
    elseif ($_.Exception.Message -match "404") {
        Write-Host "`n💡 解决方案：模型不存在或未启用" -ForegroundColor Cyan
        Write-Host "   尝试其他模型: gemini-1.5-pro, gemini-1.5-flash, gemini-pro" -ForegroundColor White
    }
}
