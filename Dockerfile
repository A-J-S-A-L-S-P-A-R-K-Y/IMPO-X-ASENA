FROM quay.io/eypzgod/izumi:latest
RUN git clone https://github.com/A-J-S-A-L-S-P-A-R-K-Y/IMPO-X-ASENA /root/bot/
WORKDIR /root/bot/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
