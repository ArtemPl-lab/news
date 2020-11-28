import { createProxyMiddleware } from 'http-proxy-middleware';
export default createProxyMiddleware({
    target: "http://localhost:5000",
    logLevel: "debug",
    followRedirects: true
}); 