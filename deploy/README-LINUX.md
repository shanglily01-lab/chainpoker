# ChainPoker Linux + Nginx Deployment

Domain: `chainpoker.club`

## 1. Upload and extract

Upload `chainpoker-site-linux.tar.gz` to your server, then run:

```bash
sudo mkdir -p /var/www/chainpoker.club
sudo tar -xzf chainpoker-site-linux.tar.gz -C /var/www/chainpoker.club
sudo chown -R www-data:www-data /var/www/chainpoker.club
```

If your Nginx user is not `www-data`, replace it with your server's Nginx user.

## 2. Install Nginx config

```bash
sudo cp /var/www/chainpoker.club/deploy/nginx-chainpoker.club.conf /etc/nginx/sites-available/chainpoker.club
sudo ln -s /etc/nginx/sites-available/chainpoker.club /etc/nginx/sites-enabled/chainpoker.club
sudo nginx -t
sudo systemctl reload nginx
```

## 3. Optional HTTPS

If Certbot is installed:

```bash
sudo certbot --nginx -d chainpoker.club -d www.chainpoker.club
```

Then test:

```bash
curl -I http://chainpoker.club
```
