// Không lưu hồ sơ, mã phiên hay phản hồi API vào cache.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate')e.respondWith(fetch(e.request).catch(()=>new Response('<meta charset="utf-8"><h1>KPI Lộc Ninh</h1><p>Cần kết nối Internet. Bật mạng rồi mở lại app để đăng nhập và xử lý công việc.</p>',{headers:{'Content-Type':'text/html;charset=utf-8'}})));});
