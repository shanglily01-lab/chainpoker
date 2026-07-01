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

## 3. Enable HTTPS

The site should serve both `chainpoker.club` and `www.chainpoker.club` with a
valid Let's Encrypt certificate. Install Certbot if it is not already present:

```bash
sudo apt update
sudo apt install -y certbot python3-certbot-nginx
```

Make sure no other Nginx server block is already handling port `443` for this
domain. If `https://chainpoker.club` returns a JSON/API response or the wrong
certificate, remove or disable that conflicting `server_name chainpoker.club`
configuration first.

Then request and install the certificate:

```bash
sudo certbot --nginx -d chainpoker.club -d www.chainpoker.club
```

Choose the Certbot option that redirects HTTP traffic to HTTPS.

Then test:

```bash
curl -I http://chainpoker.club
curl -I https://chainpoker.club
sudo nginx -t
sudo systemctl reload nginx
```

Expected result:

```text
HTTP/2 200
```
