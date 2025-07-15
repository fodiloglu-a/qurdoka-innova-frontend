# --- AŞAMA 1: Uygulamayı Derleme (Build Stage) ---
# Node.js'in Long-Term Support (LTS) versiyonunu temel alıyoruz.
# 'alpine' etiketli imajlar daha küçük boyutludur.
FROM node:20-alpine AS build

# Uygulama için çalışma dizini oluşturuyoruz.
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyalıyoruz.
# Bu dosyalar değişmediği sürece Docker bu katmanı önbellekten kullanır, bu da derleme süresini hızlandırır.
COPY package*.json ./

# Bağımlılıkları kuruyoruz. `npm ci` komutu, package-lock.json dosyasını kullanarak
# tam olarak aynı bağımlılıkları kurar ve daha hızlıdır.
RUN npm ci

# Projenin geri kalan tüm kaynak kodunu kopyalıyoruz.
COPY . .

# Angular uygulamasını üretim modunda derliyoruz.
# Bu komut, `angular.json` dosyanızdaki "production" yapılandırmasını kullanır.
RUN npm run build -- --configuration production

# --- AŞAMA 2: Uygulamayı Sunma (Serve Stage) ---
# Statik dosyaları sunmak için hafif ve performanslı Nginx web sunucusunu kullanıyoruz.
FROM nginx:stable-alpine

# Angular derlemesi sonucu oluşan statik dosyaları Nginx'in sunum klasörüne kopyalıyoruz.
# Kaynak yolundaki `qurdoka-innova-frontend` ismi, angular.json dosyanızdaki proje adıyla eşleşmelidir.
COPY --from=build /app/dist/qurdoka-innova-frontend/browser /usr/share/nginx/html

# Angular'ın client-side routing özelliğini desteklemek için özel Nginx yapılandırmasını kopyalıyoruz.
# Bu, kullanıcıların doğrudan bir alt sayfaya (örn: /projeler) gittiğinde 404 hatası almasını engeller.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Nginx'in çalışacağı portu dışarıya açıyoruz. Render bu porta otomatik olarak yönlendirme yapacaktır.
EXPOSE 80

# Nginx sunucusunu başlatıyoruz.
CMD ["nginx", "-g", "daemon off;"]
