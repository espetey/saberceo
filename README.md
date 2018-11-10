## SaberCEO
---
Fantasy CEO, or "Sabermetric" CEO, e.g. fantasy football but simulating a CEO, selecting C-level people, board members etc. Derived from publically-available SEC listings, track owners/C-level people, allow them to be selected onto "teams" and the "company" performs relative to the holdings, i.e. "skill" of their members. Also maybe have the company be able to pick one or more industries or market sectors to operate in and find some macro performance metric to factor in as well.

#### Technically
- [ ] Scrape SEC holdings by holder (Form 4)
- [ ] CEO information from wikipedia, is that freely available via API
- [ ] Aggregate holdings by positions
- [ ] Find industry/sector performance metric on a daily basis? what is free?
- [ ] Use Crunchbase/Mattermark/AngelList/StockTwits as a sort of recruiting/draft-day style view of potential IPO's and other metrics on holdings of people

#### Architecture
- Node.js
- MySQL
- Angular or React

#### Resources
- [EDGAR](https://www.sec.gov/page/info/edgar.shtml)
- https://www.sec.gov/cgi-bin/browse-edgar?company=facebook&owner=exclude&action=getcompany
- https://www.sec.gov/forms
- https://www.sec.gov/Archives/edgar/data/1326801/000112760217019889/xslF345X03/form4.xml
- [Get insider transactions](https://www.sec.gov/cgi-bin/own-disp?action=getissuer&CIK=0001326801)
- https://www.sec.gov/cgi-bin/browse-edgar?CIK=BRKA&owner=exclude&action=getcompany
- [10 percent owner](https://books.google.com/books?id=Dkh5yJeLDlcC&pg=PA49&lpg=PA49&dq=%2210+percent+owner%22&source=bl&ots=GjVNqp5Bm0&sig=Se2GwKVTp2_XK_VD4dX_fUIwGqU&hl=en&sa=X&ved=0ahUKEwjxiKGd4LTUAhVsxoMKHUMJDF0Q6AEIZDAL#v=onepage&q=%2210%20percent%20owner%22&f=false)
- https://www.sec.gov/investor/pubs.shtml

#### Examples
##### People
- [Reed Hastings](https://www.sec.gov/cgi-bin/own-disp?action=getowner&CIK=0001033331)
- [Peter Thiel](https://www.sec.gov/cgi-bin/own-disp?action=getowner&CIK=0001211060)
- [Sheryl Sandberg](https://www.sec.gov/cgi-bin/own-disp?action=getowner&CIK=0001366010)
- [Marc Andreessen](https://www.sec.gov/cgi-bin/own-disp?action=getowner&CIK=0001160077)


##### Companies
- [MSFT](https://www.sec.gov/cgi-bin/own-disp?action=getissuer&CIK=0000789019)
- [FB](https://www.sec.gov/cgi-bin/own-disp?action=getissuer&CIK=0001326801)
- [NFLX](https://www.sec.gov/cgi-bin/own-disp?action=getissuer&CIK=0001065280)
