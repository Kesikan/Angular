import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`table {
  width: 100%;
}
td, th {
  text-align: left;
  padding: 8px;
}
tr.example-detail-row {
  height: 0;
}

tr.example-element-row:not(.example-expanded-row):hover {
  background: #f5f5f5;
}
tr.example-element-row:not(.example-expanded-row):active {
  background: #efefef;
}
.example-element-row td {
  border-bottom-width: 0;
}
.example-element-detail {
  overflow: hidden;
  display: flex;
}
.example-element-diagram {
  min-width: 80px;
  border: 2px solid black;
  padding: 8px;
  font-weight: lighter;
  margin: 8px 0;
  height: 104px;
}
.example-element-symbol {
  font-weight: bold;
  font-size: 40px;
  line-height: normal;
}

.example-element-description {
  padding: 16px;
}
.example-element-description-attribution {
  opacity: 0.5;
}
`],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppComponent implements OnInit {
  dataSource: IBook[];
  columnsToDisplay = ['id', 'title', 'author', 'status'];
  expandedElement: IBook | null;

  constructor(private titlecasePipe: TitleCasePipe) {
  }

  ngOnInit() {
    this.dataSource = ELEMENT_DATA;
    // tslint:disable-next-line:only-arrow-functions
    this.dataSource.forEach(function(value) {
      const returndate = value.borrowers[value.borrowers.length - 1].returnedDate;
      value.status = (returndate != null) ? 'AVAILABLE' : 'NOTAVAILABLE';
    });
  }

  transformName(text: string): string {
    return this.titlecasePipe.transform(text);
  }
}

export interface IBook {
  id: number;
  title: string;
  author: string;
  status: string;
  borrowers: IBorrower[];
}

export interface IBorrower {
  name: string;
  borrowedDate: string;
  returnedDate: string;
}

const ELEMENT_DATA: IBook[] = [
  {
    id: 1,
    title: 'Learning C#: A Practival Approach (Volume 2)',
    author: 'bruce e. scurter',
    status: 'asdfsadf',
    borrowers:
      [
        {
          name: 'john doe',
          borrowedDate: '2017-12-22',
          returnedDate: '2018-01-19'
        },
        {
          name: 'greg stuart',
          borrowedDate: '2018-02-25',
          returnedDate: null
        }
      ]
  },

  {
    id: 2,
    title: 'Python: For Beginners: A Crash Course Guide to Learn Python in 1 Week',
    author: 'timothy c. needham',
    status: 'ssdfsdf',
    borrowers:
      [
        {
          name: 'philip stans',
          borrowedDate: '2016-09-12',
          returnedDate: '2016-09-30'
        },
        {
          name: 'chris vons',
          borrowedDate: '2018-04-01',
          returnedDate: '2018-04-02'
        },
        {
          name: 'keith jones',
          borrowedDate: '2018-08-01',
          returnedDate: '2018-04-02'
        }
      ]
  }
];
