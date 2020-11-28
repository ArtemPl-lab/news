import { createProxyMiddleware } from 'http-proxy-middleware';
export default createProxyMiddleware("http://localhost:5000/api");