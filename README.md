<p align="center">
<img src="https://img.shields.io/badge/language-python-orange.svg">&nbsp;
<img src="https://img.shields.io/badge/license-MIT-green.svg">&nbsp;
<img src="https://img.shields.io/badge/platform-mac,*nix-informational">&nbsp;
<a href="https://travis-ci.org/yrahul3910/se-hw2"><img src="https://travis-ci.org/yrahul3910/se-hw2.svg?branch=master"></a>
<a href="https://zenodo.org/badge/latestdoi/287859286"><img src="https://zenodo.org/badge/287859286.svg" alt="DOI"></a>



</p> <hr />

# SE 2020 - HW2

Rust, Go, Ruby version of - Game of life

## Rust

### Installation
Install Rust:
```{sh}
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

### Building and testing
Run the below from `Rust/game_of_life/`.

Then, build the code:
```{sh}
cargo build
```

To run the test suite:
```{sh}
cargo test
```

### Installation
Install GO:
```{sh}
curl -O https://golang.org/dl/go1.15.linux-amd64.tar.gz
tar -xvf go1.15.linux-amd64.tar.gz
sudo chown -R root:root ./go
sudo mv go /usr/local
export PATH=$PATH:/usr/local/go/bin
```

### Building and testing
Run the below from `GO/game_of_life/src`.
```{sh}
go run GOL.go 
```
### Installation
Install Ruby:

For Debian or Ubuntu:
```{sh}
$ sudo apt-get install ruby-full
```
For Homebrew (macOS)

```{sh}
$ brew install ruby
```
### Building and testing
Run the below from `Ruby/game_of_life/test`.
```{sh}
ruby unittest.rb
```
Or in the se-HW2 folder run(where the rakefile located):
```{sh}
rake
```
