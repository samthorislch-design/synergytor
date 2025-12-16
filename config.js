// 配置文件 - Configuration File
const APP_CONFIG = {
    // 服务器配置 - Server Configuration
    // 注意：请在这里更新您的 ngrok URL
    // Note: Update your ngrok URL here
    SERVER_URL: 'https://utilizable-maci-trunkless.ngrok-free.dev',

    // WebSocket URL (如果后端支持 WebSocket)
    // WebSocket URL (if backend supports WebSocket)
    WS_URL: 'wss://utilizable-maci-trunkless.ngrok-free.dev',

    // 功能开关 - Feature Flags
    FEATURES: {
        // 启用 WebSocket（需要后端支持）
        ENABLE_WEBSOCKET: false,

        // WebSocket 不可用时的轮询间隔（毫秒）
        POLLING_INTERVAL: 3000,

        // 启用调试日志
        DEBUG_MODE: true
    },

    // UI 配置
    UI: {
        // 消息自动滚动
        AUTO_SCROLL: true,

        // 显示加载动画
        SHOW_LOADING: true,

        // 错误提示持续时间（毫秒）
        ERROR_TOAST_DURATION: 3000
    },

    // 安全配置
    SECURITY: {
        // 警告：密码验证应该在后端进行！
        // Warning: Password validation should be done on backend!
        // 这里仅作为示例，生产环境请移除
        ENABLE_FRONTEND_PASSWORD_CHECK: true
    }
};

// 环境检测 - Environment Detection
if (typeof window !== 'undefined') {
    window.APP_CONFIG = APP_CONFIG;
}
