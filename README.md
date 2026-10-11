# 김재원 | 미래에셋증권 Quant/ESG 포트폴리오

미래에셋증권 리서치센터 Quant/ESG RA 지원용 포트폴리오입니다. 유안타 포트폴리오의 색상·서체·카드·반응형 스타일을 유지하고, 대표 경험과 소개 문구를 변경했습니다.

- [공개 포트폴리오](https://bucheoncityboy.github.io/mirae-quant-esg-portfolio/)
- [전체 프로젝트 인덱스](https://github.com/bucheoncityboy/portfolio-index)
- [지원 공고](https://www.kofia.or.kr/brd/m_96/view.do?seq=42588)

## 대표 경험

1. **Fama-French 모형 재현 및 한국시장 실증**: HY-FIN 팀장으로 미국 논문을 재현하고 한국 1,054종목에 같은 틀을 적용했습니다. 팩터 프리미엄의 차이와 GRS 검정에서 확인한 모형의 한계를 함께 소개합니다.
2. **글로벌 시장 브리핑 자동화**: 관측일·거래일·출처를 검증하는 브리핑 스킬을 개발하고 K-Skill 정식 기능에 기여했습니다. 약 40분 → 10분 이내는 학회원 피드백 기준입니다.
3. **거버넌스 정보의 PBR 보완 효과 실증**: VFS 아이디어에서 출발해 공개 사외이사 비율을 사용했습니다. 기업 특성 매칭·가중치 민감도와 함께, 일관된 선별력과 완전한 총수익률을 확인하지 못한 한계를 명시합니다.

## 로컬 검증

```sh
npm ci
npm run check
npm run typecheck
npm run preview
```

미리보기는 `http://127.0.0.1:4173`에서 제공합니다. GitHub Pages는 `main` 변경 시 구조·링크·타입 검사 후 공개 파일만 배포합니다.

## 디자인과 근거

`styles.css`와 JK favicon은 [유안타 포트폴리오](https://github.com/bucheoncityboy/yuanta-research-portfolio) 원본을 그대로 사용했습니다. 기존 브리핑 샘플 역시 날짜와 수치를 변경하지 않았습니다. 새 대표 경험은 사용자가 제공한 경험 서술과 각 프로젝트의 2026-10-12 README를 기준으로 정리했습니다.

[출처·수치 확인 범위](docs/source-notes.md) · [검증 기록](docs/verification.md)

연구보고서는 원본 저장소로 연결합니다. 연구용 데이터, 첨부 문서, 유료 IB 리서치 원문은 새 사이트에 복제하지 않습니다.
