---
title: Github 블로그 생성 및 Jekyll Chirpy theme 설정
categories: [Blogging, Tutorial]
tags: [jekyll, chirpy]
pin: true
math: true
mermaid: true
img_path: assets/img
image:
  path: avatar.png
  alt: This is a preview image
---

## Github 블로그 만들기

기본적으로 Github에 My_ID.github.io repository(https://github.com/My_ID/My_ID.github.io)를 만들면 https://My_ID.github.io URL로 내 블로그에 접속할 수 있다. Github에서는 [Jekyll](https://jekyllrb.com/)을 이용해서 markdown text 파일로 작성한 컨텐츠를 Blog로 만들 수 있도록 지원하고 있다. Jekyll site에서 많은 Blog theme들을 볼 수 있는데 여기서는 Chirpy 테마를 사용하는 방법에 대해 간단히 정리한다.

1. [Github site](https://github.com) 계정 접속

2. [Chirpy theme site](https://github.com/cotes2020/jekyll-theme-chirpy)의 master branch를 fork 하여 내 블로그 repository(My_ID.github.io) 생성

3. My_ID.github.io repository에서 branch 명을 master에서 main으로 변경: branch icon click하면 rename 기능 사용 가능

4. `Settings` > `Pages` > `Build and deployment`섹션 에서 `Source`를 `Deploy from a branch`에서 `Github Actions`로 변경후 `Configure` 버튼을 click 하고 `commit changes` 선택

이제 PC 환경에서

1. local repository 생성
    ```terminal
    $ mkdir blog && cd blog
    $ git clone https://github.com/My_ID/My_ID.github.io
    $ cd ./MyID.github.io
    ```

2. ruby 및 Jekyll 실행을 위한 모듈 설치
    ```terminal
    $ sudo apt install ruby-full
    $ echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
    $ echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
    $ source ~/.bashrc
    
    $ gem install bundler jekyll
    $ bundle
    ```

3. Chirpy Theme가 사용할  npm 및 node.js 모듈 설치
    ```terminal
    $ sudo apt install npm
    $ npm install
    $ npm run build
    ```

    이로써 Search/Contents(목차) 등의 기능이 정상 동작함

4. 설치 완료 후 PC에서 Jekyll과 Chirpy 테마가 제대로 동작하는지 확인
    ```terminal
    $ jekyll serve
    ```

    위의 명령으로 PC에 Web server를 띄우고 Web browser를 이용해 http://127.0.0.1:4000 에 접속하여 블  로그 테마가 정상 동작하는지 확인

5. Chirpy 테마 수정
    - ./.gitignore 파일에서 assets/js/dist 폴더를 무사하지 않도록 주석처리(#assets/js/dist)
    - ./.github/wokflow/pages-deploy.yml.hook 파일 삭제 : 앞서 Github site에서 `Build and deployment`섹션의 `Source`를 `Github Actions`로 변경함에 따른 것임 
    <p>

6. 기타 개인 정보 설정 변경
    - ./_config.yml 파일내 각종 설정 정보 변경
    <p>

7. local(PC) 변경 사항 Github에 Upload
    ```terminal
    $ git status
    $ git add -A
    $ git commit -m "Update blog settings."
    $ git push
    ```

    Github site의 상단 메뉴에서 Actions Tab을 확인해 보면 upload 작업이 완료됐는지 확인할 수 있고, 이후 Web Browser에서 내 Blog를 refresh해서 제대로 변경됐는지 확인

## giscus 를 이용한 댓글 창 달기

- giscus 앱을 [Github에 설치](https://github.com/apps/giscus)하고 댓글에서 사용할 repository를 지정해 주면 해당 repository의 `Discussions` 게시판을 통해 댓글을 관리할 수 있게 됨
  - Blog repository의 `Discussions`를 사용하면 되는데 기본적으로 활성화 되어 있지 않음
  - Blog repository의 `Settings`에서 `Discussions` checkbox를 설정하면 됨

- ./_config.yml에서 `comments:` 부분을 아래와 같이 수정

```yaml
comments:
  active: giscus
```
- [giscus 앱 Site](https://giscus.app)에서 기본 설정을 한 후 설정된 API script를  복사해서 ./_includes/comments/giscus.html 파일의 `giscusAttributes`의 각 field에 해당 내용을 포함시켜 주면 됨.
  - 사용할 `repository:`와 `Discussion Category`가 제대로 설정 됐는지 확인 필요: 블로그 repository를 입력하고, category는 `Announcements`를 사용했고 나머지는 기본 설정 사용

- giscus가 사용할 Repository는 Github site에서 `Settings` > `Github Apps` > `giscus`에서 변경 가능


## 블로그에서 Image 사용 방법

기본적으로 Chirpy 테마에서 img_cdn과 블로그 내 로칼 이미지를 동시에 사용할 수 없다. 홈(HOME)의 Avatar 이미지도 마찬가지다. 두 가지를 동시에 사용하려면 Chirpy 테마의 _include/ 폴더 내의 소스 들을 수정해야 한다. 소스 수정 없이 블로그 자체 이미지를 사용하려면 _config.yml 파일에서 img_cdn을 아래와 같이 주석 처리하면 된다.

```yaml
#img_cdn: "https://chirpy-img.netlify.app"
avatar: "assets/img/avatar.png"
```

### img_cdn과 블로그 이미지 같이 사용하기

Chirpy 테마를 설치하면 딸려오는 Chirpy 저자의 블로그 post가 4개 있는데 이미지들은 모두 img_cdn을 참조하고 있다. 이 post들은 Chirpy 테마 사용법들이다. 이 글들을 블로그에서 함께 보여주기 위해 _include/ 폴더 내의 소스 몇 개를 건드렸는데, 기본적인 규칙은,

- 상대 path로 지정된 경우에는 img_cdn 설정을 무시하고, 블로그 내의 이미지 사용(위의 _config.yml에서 `avatar:` path는 상대 path로 지정한 것임)
- img_cdn이 지정된 경우, page.img_path 또는 page.image.path가 절대 path('/')로 시작하면 img_cdn 사용

#### 참고 사항

- Chirpy 테마에 preview image란 놈이 있는데 page.image.path 설정을 사용한다. 이 놈을 설정하면 블로그 post 상단에 고정 크기 이미지가 보이고, 홈의 post-list에도 작은 이미지가 post 요약 옆에 보인다. 이 글에서 그렇게 사용하고 있다.
- 그런데, 홈의 post-list의 preview image 소스를 [Liquid](https://shopify.github.io/liquid/) logic으로 생성하는데 내가 수정한 코드들이 안전하게 동작할지 보장할 수는 없다. 문제 발생시 간단한 해결책은, cdn을 사용할 경우 page.image.path에 전체 이미지 url을 사용하는 것이다.

### 블로그 이미지 사용 예
```markdown
![test image](avatar.png){: .right w="100" h="100"}
<!-- _image caption_ -->
```

![test image](avatar.png){: .right w="100" h="100"}
<!-- _image caption_ -->

위의 markdown을 사용해 이 글 오른쪽에 아바타 이미지 정렬. 크기는 100x100. 여기서 이미지 소스에 달랑 파일명 하나만 있는데, 이 Post의 Front matter가 아래와  같이 지정되어 있다. 즉, `img_path:`가 상대 path로 지정되어 있다. 또한, `image:` 설정으로 이글 상단에 preview 이미지를 지정했음을 알 수 있다.

```yaml
---
img_path: assets/img
image:
  path: avatar.png
  alt: This is a preview image
---
```
## 참고 사이트

- [JJIKIN 블로그](https://jjikin.com/posts/Jekyll-Chirpy-%ED%85%8C%EB%A7%88%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-Github-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0(2023-6%EC%9B%94-%EA%B8%B0%EC%A4%80)/)
- [하얀눈길 블로그](https://www.irgroup.org/posts/jekyll-chirpy/)
