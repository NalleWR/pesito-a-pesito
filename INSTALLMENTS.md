# Installment purchase plans

Edit a debt account and choose **Installment / Buy Now, Pay Later**. Open it and use **+ Purchase**. Purchases share the company account but keep separate schedules.

Use **New purchase** for debt not yet included in the account. Use **Add existing purchase** to enter original purchase amount, purchase date, optional APR, total scheduled repayment, and paid-to-date. Remaining scheduled debt is total repayment minus paid-to-date. Existing purchases default to already included in the account balance; uncheck that only when the remaining debt needs to be added. The review shows account debt before and after saving.

Generate upcoming installments, then edit individual due dates and amounts before saving. They must sum to the remaining scheduled debt. Enter zero unpaid installments for fully paid purchases. Optional historical installment rows capture original due date, actual payment date, and amount; these are part of paid-to-date, not additional payments. Undocumented paid amounts remain opening history with dates labeled unknown. Imports never create cash withdrawals or historical ledger transactions. Original purchase amounts are records and are not added again to debt.

Monthly schedules preserve the original day and clamp to the last day of shorter months. Weekly and biweekly schedules advance by 7 or 14 days. The final installment is the total minus prior installments and may be smaller. Preview before saving. Individual future dates and amounts can be edited; regeneration preserves paid history.

Record a payment as a new transfer, or link an existing debt-side payment without another withdrawal. Choose a particular installment or the next unpaid installments only when the lender confirms that application. Extra overall balance payments can be recorded separately; they do not waive any installment until the updated lender schedule is reconciled.

Reconciliation previews the updated scheduled amount and debt adjustment. Pending extra payments are accounted for once, so only the remaining difference adjusts debt. Adjustments are visible in the schedule history and never count as cash income.

Pay Off Purchase uses the actual lender quote, records or links one payment, and separately adjusts the debt for the difference. Remaining scheduled obligations close; actual payment history is kept. This app does not connect to lenders, make payments, or calculate their payoff quotes.

Existing data and account balances are preserved when selecting an account type. Plans, allocations, and adjustment history are included in the existing JSON backup. Transaction edits/deletions can invalidate payment links; review the schedule after editing a linked payment. Calendar and analytics pages are separate future work.

Run `node tests/installments.cjs` for recurrence, integer-cent totals, allocation, reconciliation, and backup checks. Browser QA used fictional accounts and covered setup, smaller final payment, info popup, payment to a specific future installment, and discounted payoff. Native Android back behavior has not been device-tested.
