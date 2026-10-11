# 검증 기록

2026-10-12 (Asia/Seoul).

## 로컬 검사

- `npm ci`: 설치 완료, 알려진 취약점 0개.
- `npm run check`: 중복 ID·본문/샘플 앵커·로컬 파일·외부 링크 속성·접근성 기본 구조·배포 범위 통과.
- `npm run typecheck`: 통과.
- 미리보기 홈페이지 HTTP 200.
- 대표 경험은 Fama-French, 글로벌 브리핑 자동화, 거버넌스·PBR 실증의 세 카드로 구성.
- 자료 접기/펼치기와 AI 브리핑 샘플 이동 확인.

## 디자인과 반응형

원본 디자인 커밋: `63d4defabc7c852f8cacc9cf40e484479e5bebe7`.

`styles.css`의 SHA-256은 원본과 동일합니다.

```text
AFA76B9B3BD4B6A674B68825A17017C13F07CF0B211355E69C921129EBB18E0C
```

360·768·1280px에서 DOM 경계를 확인했고 가로 넘침이 없었습니다. 기본 데스크톱 화면에서 기존 서체·색상·상단 구성의 유지도 확인했습니다. [반응형 기록](responsive-checks.json).

## 링크와 근거

GitHub API로 본문의 서로 다른 GitHub 링크 19개를 검사했습니다. 저장소·폴더·기능 문서가 모두 존재했고, K-Skill PR #675와 #677은 병합된 상태였습니다. [링크 기록](link-checks.json).

LinkedIn 로그인 이후 화면이나 실제 이메일 발송은 검사하지 않았습니다. 원천 연구의 통계 계산과 브리핑 가격을 새로 재실행한 것은 아닙니다. 연구의 수치·기간·해석 범위는 각 저장소 README와 사용자 제공 서술을 대조했습니다.

## GitHub Pages

배포 파일은 홈페이지·CSS·favicon·기존 공개 브리핑 샘플로 제한합니다. [배포 Actions](https://github.com/bucheoncityboy/mirae-quant-esg-portfolio/actions/runs/38175019976)가 성공했고, [공개 홈페이지](https://bucheoncityboy.github.io/mirae-quant-esg-portfolio/)와 CSS·favicon·브리핑 샘플의 HTTP 200 및 배포한 내용 일치를 확인했습니다(줄바꿈 정규화 후 비교). VFS 실증 대시보드도 HTTP 200으로 응답했습니다. [배포 응답 기록](deployment-checks.json).

## 내용 재검수

2026-10-12 사용자 요청으로 배포 화면과 인덱스 소개를 재검수했습니다.

- 최신 VFS 커밋 `4cfb7dcb54803ef44118fddd8f5e52aa95544488`의 README·`outputs/supplement/summary.json`·재현 문서를 대조했습니다. 소개한 수치와 반올림은 일치했습니다.
- 저PBR 부진·고PBR 우위 설명에 시가총액 가중 조건을 명시했습니다. 고PBR 동일가중은 -0.6959%p/월로 부호가 달라, 가중 방식을 생략하면 결과를 과도하게 일반화할 수 있습니다. 본문에 구간별 관측기간도 넣었습니다.
- 인덱스에 Good−Bad의 의미, 사이트 보조 패널에 상위−하위 집단·가격수익률 기준을 명시했습니다.
- FF3 최신 README와 평균 R²·HML·SMB·GRS·표본기간을 대조했습니다. 미국 R² 0.7524는 75.2%로 표시합니다.
- GitHub 링크 19개를 다시 검사했고, 인덱스의 결론 링크도 실제 GitHub heading ID가 존재함을 확인했습니다.
- 360·390·768·1280px에서 가로 넘침이 없었습니다. CSS와 favicon은 수정하지 않았습니다.
- 원천 금융 패널과 통계 추정을 다시 실행하는 감사는 수행하지 않았습니다.

수정 후 [재배포 Actions](https://github.com/bucheoncityboy/mirae-quant-esg-portfolio/actions/runs/38175629242)가 성공했습니다. 공개 홈페이지는 HTTP 200이고 최신 로컬 HTML과 일치했으며, 인덱스 README도 반영된 내용을 확인했습니다. 브라우저 새로고침 후 가중 방식·집단 정의가 표시되는 것을 확인했습니다.
