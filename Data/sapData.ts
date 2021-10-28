export interface FinanceData {
  id: string,
  data: {
    q1: number,
    q2: number,
    q3: number,
    q4: number,
    ytd: number
  }[]
}

export const FinancialReportMockData: FinanceData[] = [
  {
    id: 'BC-1111',
    data: [
      {
        q1: 250,
        q2: 60,
        q3: 500,
        q4: 390,
        ytd: 800
      }
    ]
  },
  {
    id: 'BC-2222',
    data: [
      {
        q1: 250,
        q2: 60,
        q3: 500,
        q4: 390,
        ytd: 800
      }
    ]
  }
]