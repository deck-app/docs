---
sidebar_position: 3
---

# Ubuntu

## Install via terminal (recommended)
```curl
curl https://raw.githubusercontent.com/sfx101/deck-for-linux/main/install.sh | sh
```

## Install manually
Download the latest release of the DECK app, install & then run the following commands to give the app access binding to ports 80 & 443.
```shell
sudo setcap 'cap_net_bind_service=+eip' /opt/DECK/deck
sudo sh -c "echo '/opt/DECK/' >> /etc/ld.so.conf.d/deck.conf"
sudo ldconfig
```
:::tip
Make sure you've docker and docker-compose installed & configured for rootless access, [read more](https://docs.docker.com/engine/security/rootless/).
:::