---
title: 우분투 네트워크 정보 얻기
categories: [Ubuntu, 사용법]
tags: [ubuntu, network]
img_path: assets/img
---

기술은 시간을 따라 변해 간다. "아, 옛날이여~!"를 노래하기 보단 적응하고 같이 흘러가야 한다.

우분투의 net-tools 패키지는 애용하던 네트워크 도구이다. 아직도 따로 설치할 수는 있지만 우분투 기본 패키지에서 사라진지 오래다.

## IP 정보

ifconfig를 대체하는 명령은 `ip` 이다.

```terminal
$ ip -a
```

## 네트워크 연결 정보

netstat 대신 소켓 정보를 확인하기 위한 명령이 `ss` 인데 자주 안쓰니까 명령 자체를 까먹는다.

```terminal
$ ss -h
$ ss -aunp # cf. netstat -ant
$ sudo ss -ltpn
```

## Routing 정보

traceroute을 대체하는 명령은 `mtr`과 `tracepath`이다.

```terminal
$ mtr google.com
$ tracepath -4 google.com
```

