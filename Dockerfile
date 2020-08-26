FROM debian:stretch-slim
SHELL ["/bin/bash", "-c"]

RUN apt-get update && \
    apt-get install -y --no-install-recommends gcc git tmux emacs vim nano build-essential curl procps ca-certificates && \
    curl -sSL https://get.rvm.io | bash -s stable --ruby && \
	source /usr/local/rvm/scripts/rvm && \
	usermod -aG rvm root && \
    curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | bash -s -- -y&& \
    curl -sSL -o go.tar.gz https://golang.org/dl/go1.15.linux-amd64.tar.gz && \
    tar -C /usr/local -xzf go.tar.gz && \
    rm *.gz && \
    git clone https://github.com/yrahul3910/se-hw2.git && \
	apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR $PWD/se-hw2/
