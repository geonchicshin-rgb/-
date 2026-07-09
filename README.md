# 건식 포트폴리오 사이트

스크롤을 내리면서 이야기 안으로 들어가는 스토리텔링 포트폴리오.
Next.js + Tailwind CSS + GSAP(ScrollTrigger) + Lenis 로 만들었습니다.

## 실행 방법

```bash
npm install   # 최초 1회
npm run dev   # http://localhost:3000
```

## 내용 교체 방법 (중요)

모든 문구·프로젝트 정보는 **`data/content.ts` 파일 하나**에 모여 있습니다.
파일 안에서 `[더미]` 주석이 달린 값을 찾아 실제 내용으로 바꾸면 됩니다.

- `profile` — 이름, 이메일, GitHub 주소, 히어로 문구
- `projects` — 프로젝트 3개 (문제 / 실행 / 결과 / 스택 / 미디어)
- `process` — 일하는 방식 4단계, 사용하는 AI 도구 목록
- `contact` — 마지막 연락 섹션 문구

### 이미지·영상 교체

`public/media/` 폴더에 파일을 넣고 `data/content.ts`의 경로만 바꾸면 됩니다.
파일 이름은 영문으로 해주세요 (한글 이름은 배포 시 문제가 될 수 있음).

| 현재 파일 | 용도 |
|---|---|
| `app-365-demo.mp4` | 36.5도 앱 시연 영상 |
| `app-365-screen.jpg` | 36.5도 앱 스크린샷 |
| `ai-hub-presentation.jpg` | AI 환승센터 발표 사진 |
| `b2b-diesel-inventory.pdf` | B2B 경유 프로젝트 발표 자료 |

## 배포 (준비되면)

1. GitHub에 새 저장소 생성 후 push
2. [Vercel](https://vercel.com)에서 Add New → Project → 저장소 Import → Deploy

## 구조

- `app/` — 레이아웃(Pretendard 폰트 로드), 메인 페이지
- `components/` — Hero(줌인 포털) / Manifesto(문장 점등) / Works(프로젝트 씬) / Process / Contact / Nav / SmoothScroll
- `data/content.ts` — 모든 콘텐츠 (여기만 수정하면 됨)
- `scripts/` — 스크린샷 검증 스크립트 (사이트와 무관, 지워도 됨)
