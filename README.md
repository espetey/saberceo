## SaberCEO
---
Fantasy CEO, or "Sabermetric" CEO, e.g. fantasy football but simulating a CEO, selecting C-level people, board members etc. Derived from publically-available SEC listings, track owners/C-level people, allow them to be selected onto "teams" and the "company" performs relative to the holdings, i.e. "skill" of their members. Also maybe have the company be able to pick one or more industries or market sectors to operate in and find some macro performance metric to factor in as well.

#### Technically
- [ ] Scrape SEC holdings by holder (Form 4)
- [ ] CEO information from wikipedia, is that freely available via API
- [ ] Aggregate holdings by positions
- [ ] Find industry/sector performance metric on a daily basis? what is free?
- [ ] Use Crunchbase/Mattermark/AngelList as a sort of recruiting/draft-day style view of potential IPO's and other metrics on holdings of people

#### Architecture
- Node.js
- MySQL
- Angular 2

#### Resources
- https://www.sec.gov/cgi-bin/browse-edgar?company=facebook&owner=exclude&action=getcompany
- https://www.sec.gov/forms
- https://www.sec.gov/Archives/edgar/data/1326801/000112760217019889/xslF345X03/form4.xml
- [Get insider transactions](https://www.sec.gov/cgi-bin/own-disp?action=getissuer&CIK=0001326801)
