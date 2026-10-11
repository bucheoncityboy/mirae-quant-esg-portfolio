# 내용 근거와 표현 범위

확인 기준일: 2026-10-12 (Asia/Seoul).

## 지원 직무

[금융투자협회 공고](https://www.kofia.or.kr/brd/m_96/view.do?seq=42588): 미래에셋증권 리서치센터 Quant/ESG RA(아르바이트). 자료조사·분석자료 작성 보조·데이터 업데이트 업무와 팩터투자·거버넌스·코딩·AI 활용 우대사항에 맞춰 경험을 소개했습니다. 근무 가능기간·외국어 수준·토큰 사용량은 새로 추정하지 않았습니다.

## Fama-French 연구

[통합 README](https://github.com/bucheoncityboy/fama-french-integrated-research).

- 미국 1963.07–1991.12, 342개월. 25개 Size×BE/ME 평균 R²: CAPM 0.7524, FF3 0.8992. 화면에서는 75.2%, 89.9%로 반올림했습니다.
- 한국 2000.07–2026.05, 311개월, 1,054종목. HML 월평균 0.83%, t=3.89; SMB -0.67%, t=-2.57; GRS p=0.023.
- 팀장 역할과 시장구조에 관한 해석은 사용자가 제공한 경험 서술입니다. 대형 제조업체 집중·소형주의 성장주 비중은 가능한 배경이며 식별된 인과효과로 소개하지 않았습니다.
- 원천 패널과 통계 검정을 새로 재실행한 것은 아닙니다.

## 글로벌 브리핑 자동화

사용자의 경험 서술과 기존 포트폴리오의 공개 내용을 유지했습니다.

- [개인 저장소](https://github.com/bucheoncityboy/multi-asset-morning-briefing)
- [K-Skill 공식 기능 문서](https://github.com/NomaDamas/k-skill/blob/main/docs/features/multi-asset-morning-briefing.md)
- [기여·병합 기록](https://github.com/NomaDamas/k-skill/pull/675), [정식 배포 반영](https://github.com/NomaDamas/k-skill/pull/677)
- 약 40분 → 10분 이내는 학회원 피드백이며 독립 시간측정 결과가 아닙니다.
- `samples/2026-10-07.html`은 기존 공개 AI 실행 결과를 그대로 보존했습니다. 샘플의 상세 근거 링크는 원래 유안타 저장소의 기록을 가리킵니다.

## 거버넌스·PBR 실증

[최신 README](https://github.com/bucheoncityboy/mirae-governance-vfs-research), [재현 문서](https://github.com/bucheoncityboy/mirae-governance-vfs-research/blob/main/docs/SUPPLEMENT_REPRODUCIBILITY.md).

- 2021–2025년 공시시점(PIT) 반영. 사외이사 수/전체 이사 수를 공개 대리지표로 사용했고 MSCI Governance Score는 사용하지 않았습니다.
- 저PBR 가격수익률 연속 비교: 2021.07–12, Good−Bad -1.0340%p/월. 고PBR: 2022.07–10, +2.5481%p/월. 서로 다른 시장기간입니다.
- 58개월 관측 단면의 고PBR 매칭 전후: +0.5695 → +0.2595%p/월. 화면에는 +0.57 → +0.26%p로 반올림했습니다. 표본 구성은 매칭 전후 다르며 투자 가능한 NAV·인과효과가 아닙니다.
- VFS−Value: 2021.07–12 공통 6개월, 시총가중 +0.43%p/월, 동일가중 -0.4158%p/월. 화면의 동일가중 값은 -0.42%p입니다. 배당 포함 부분 표본은 각각 +0.2822, -0.4397%p/월입니다.
- 원문 전략의 직접 재현·반박이나 거버넌스 전반의 효과로 일반화하지 않습니다. 전체 보유종목의 완전한 총수익률·독립 OOS는 확인하지 못했습니다.

## 디자인 원본

[유안타 포트폴리오](https://github.com/bucheoncityboy/yuanta-research-portfolio)의 CSS·favicon을 그대로 유지했습니다. 본문 HTML의 카드·보조 패널·아코디언·오픈소스 목록·학력·연락처 구조를 재사용했습니다.
