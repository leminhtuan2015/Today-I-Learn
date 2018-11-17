
### Node.js Production Process Manager

* PM2 is a Production Runtime and Process Manager for Node.js applications with a built-in Load Balancer. 
It allows you to keep applications alive forever, to reload them without downtime and facilitate common Devops tasks.

```sh

# Installing PM2
npm install pm2 -g

# Start an application
pm2 start app.js

# Managing applications

pm2 ls

pm2 stop     <app_name|id|'all'|json_conf>
pm2 restart  <app_name|id|'all'|json_conf>
pm2 delete   <app_name|id|'all'|json_conf>

# To monitor logs, custom metrics, application information:

pm2 monit

```

