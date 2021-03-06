import { Component, OnInit } from '@angular/core';
import { BankLoan } from '../shared/models/bank-loan-model';
import { MenuItem } from 'primeng/primeng';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    title = 'next-solar-calculator';
    kWhSize = 6.365;
    ppwGlobal = 4.80;
    isLeadSetter: boolean = false;
    isFederalCredit: boolean = true;
    isNVRebate: boolean = false;
    isOverrideBasePriceActive: boolean = false;
    isOverridekWhSizeActive: boolean = true;
    setter: number = 350;
    desiredKcms: number = 700;
    basePrice: number = 3.0;
    items: MenuItem[];
    netSystemPrice: number;
    federalTaxCredit: number;
    nvRebate: number;
    totalAfterCredits: number;
    bankLoans: BankLoan[] = [
        {
            loanType: 'LOANPAL 2039',
            payment: 0,
            cms: 0,
            perKw: 0,
            dealerFeePercent: 17.49 / 100,
            interest: 3.99 / 100,
            term: 240,
            kWhSize: 6.365,
            ppw: 4.80,
            base: 3.0,
            priceBeforeRoof: 0,
            netSystemPrice: 0,
            federalTaxCredit: 0,
            nvRebate: 0,
            totalAfterCredits: 0,
            dealerFee: 0,
            dealerCost: 840,
            audit: 0,
            roofCost: 0,
            leadSetter: 0,
            wishedPpw: 0
        },
        {
            loanType: 'LOANPAL 2029',
            payment: 0,
            cms: 0,
            perKw: 0,
            dealerFeePercent: 23 / 100,
            interest: 2.99 / 100,
            term: 240,
            kWhSize: 6.365,
            ppw: 4.80,
            base: 3.0,
            priceBeforeRoof: 0,
            netSystemPrice: 0,
            federalTaxCredit: 0,
            nvRebate: 0,
            totalAfterCredits: 0,
            dealerFee: 0,
            dealerCost: 1104,
            audit: 0,
            roofCost: 0,
            leadSetter: 0,
            wishedPpw: 0
        },
        {
            loanType: 'LOANPAL 1229',
            payment: 0,
            cms: 0,
            perKw: 0,
            dealerFeePercent: 18.25 / 100,
            interest: 2.99 / 100,
            term: 144,
            kWhSize: 6.365,
            ppw: 4.80,
            base: 3.0,
            priceBeforeRoof: 0,
            netSystemPrice: 0,
            federalTaxCredit: 0,
            nvRebate: 0,
            totalAfterCredits: 0,
            dealerFee: 0,
            dealerCost: 876,
            audit: 0,
            roofCost: 0,
            leadSetter: 0,
            wishedPpw: 0
        },
        // {
        //     loanType: 'Cash',
        //     payment: 0,
        //     cms: 0,
        //     perKw: 0,
        //     dealerFeePercent: 0,
        //     interest: 0,
        //     term: 1,
        //     kWhSize: 6.365,
        //     ppw: 4.80,
        //     base: 3.0,
        //     priceBeforeRoof: 0,
        //     netSystemPrice: 0,
        //     federalTaxCredit: 0,
        //     nvRebate: 0,
        //     totalAfterCredits: 0,
        //     dealerFee: 0,
        //     dealerCost: 0,
        //     audit: 0,
        //     roofCost: 0,
        //     leadSetter: 0,
        //     wishedPpw: 0
        // },
        // {
        //     loanType: 'LOANPAL 1029',
        //     payment: 0,
        //     cms: 0,
        //     perKw: 0,
        //     dealerFeePercent: 16.25 / 100,
        //     interest: 2.99 / 100,
        //     term: 120,
        //     kWhSize: 6.365,
        //     ppw: 4.80,
        //     base: 3.0,
        //     priceBeforeRoof: 0,
        //     netSystemPrice: 0,
        //     federalTaxCredit: 0,
        //     nvRebate: 0,
        //     totalAfterCredits: 0,
        //     dealerFee: 0,
        //     dealerCost: 780,
        //     audit: 0,
        //     roofCost: 0,
        //     leadSetter: 0,
        //     wishedPpw: 0
        // },
        // {
        //     loanType: 'SF 6059',
        //     payment: 0,
        //     cms: 0,
        //     perKw: 0,
        //     dealerFeePercent: 19.50 / 100,
        //     interest: 3.79 / 100,
        //     term: 240,
        //     kWhSize: 6.365,
        //     ppw: 4.80,
        //     base: 3.0,
        //     priceBeforeRoof: 0,
        //     netSystemPrice: 0,
        //     federalTaxCredit: 0,
        //     nvRebate: 0,
        //     totalAfterCredits: 0,
        //     dealerFee: 0,
        //     dealerCost: 936,
        //     audit: 0,
        //     roofCost: 0,
        //     leadSetter: 0,
        //     wishedPpw: 0
        // },
        // {
        //     loanType: 'SUNF 2039',
        //     payment: 0,
        //     cms: 0,
        //     perKw: 0,
        //     dealerFeePercent: 16.50 / 100,
        //     interest: 3.99 / 100,
        //     term: 240,
        //     kWhSize: 6.365,
        //     ppw: 4.80,
        //     base: 3.0,
        //     priceBeforeRoof: 0,
        //     netSystemPrice: 0,
        //     federalTaxCredit: 0,
        //     nvRebate: 0,
        //     totalAfterCredits: 0,
        //     dealerFee: 0,
        //     dealerCost: 792,
        //     audit: 0,
        //     roofCost: 0,
        //     leadSetter: 0,
        //     wishedPpw: 0
        // }
    ];

    ngOnInit(): void {
        this.calculateLoans();
        // let completeLoans: BankLoan[] = [];
        // this.bankLoans = this.bankLoans.map(bl => {
        //   const netSystemPrice = this.calculateNetSystemPrice(bl.kWhSize, bl.ppw, bl.dealerFeePercent, bl.roofCost);
        //   const nvRebate = this.calculateNvRebate();
        //   const federalTaxCredit = this.calculateFederalTaxCredit(netSystemPrice);
        //   const priceBeforeRoof = this.calculatePriceBeforeRoof(bl.kWhSize, bl.ppw);
        //   const dealerFee = this.calculateDealerFeeAmount(priceBeforeRoof, bl.dealerFeePercent);
        //   const totalAfterCredits = this.calculateTotalAfterCredit(nvRebate, federalTaxCredit, netSystemPrice);
        //   const cms = this.calculateCms(bl.kWhSize, bl.ppw, bl.base, dealerFee, bl.audit, bl.leadSetter);
        //   return <BankLoan>{
        //     loanType: bl.loanType,
        //     dealerFeePercent: bl.dealerFeePercent,
        //     interest: bl.interest,
        //     term: bl.term,
        //     kWhSize: bl.kWhSize,
        //     ppw: bl.ppw,
        //     base: bl.base,
        //     dealerCost: bl.dealerCost,
        //     audit: bl.audit,
        //     roofCost: bl.roofCost,
        //     leadSetter: this.calculateLeadSetter(),
        //     priceBeforeRoof: this.calculatePriceBeforeRoof(bl.kWhSize, bl.ppw),
        //     netSystemPrice,
        //     federalTaxCredit,
        //     nvRebate,
        //     totalAfterCredits,
        //     dealerFee,
        //     wishedPpw: this.calculateWishedPpw(bl.audit, bl.dealerFeePercent),
        //     payment: this.calculatePayment2(bl.interest / 12, bl.term, totalAfterCredits, 0, 0),
        //     cms: cms,
        //     perKw: this.calculatePerKW(cms)
        //   };
        // });
    }

    // =-(PMT(3.79%/12,240,21386))*1.035
    calculatePayment(rate: number, nperiod: number, pv: number, fv: number, type?: number) {
        if (!fv) { fv = 0; }
        if (!type) { type = 0; }

        if (rate === 0) { return -(pv + fv) / nperiod; }

        const pvif = Math.pow(1 + rate, nperiod);
        let pmt = rate / (pvif - 1) * -(pv * pvif + fv);

        if (type === 1) {
            pmt /= (1 + rate);
        }

        return Math.abs(pmt);
    }

    calculatePayment2(ratePerPeriod: number, numberOfPayments: number, presentValue: number, futureValue: number, type: number) {
        if (ratePerPeriod != 0.0) {
            // Interest rate exists
            const q = Math.pow(1 + ratePerPeriod, numberOfPayments);
            return (ratePerPeriod * (futureValue + (q * presentValue))) / ((-1 + q) * (1 + ratePerPeriod * (type)));

        } else if (numberOfPayments != 0.0) {
            // No interest rate, but number of payments exists
            return (futureValue + presentValue) / numberOfPayments;
        }

        return 0;
    }

    calculatePerKW(cms: number, kWhSize: number): number {
        return cms / kWhSize;
    }
    // =((6.365*1000)*(4.8-8))-5958-0
    calculateCms(
        kWhSize: number,
        ppw: number,
        base: number,
        dealerFeeAmount: number,
        audit: number,
        leadSetter: number) {
        if (!this.isLeadSetter) {
            return ((kWhSize * 1000) * (ppw - base)) -
                dealerFeeAmount - audit;
        }

        return ((kWhSize * 1000) * (ppw - base)) -
            dealerFeeAmount - audit - leadSetter;
    }

    calculateDealerFeeAmount(priceBeforeRoof: number, dealerFeePercent: number) {
        return priceBeforeRoof * dealerFeePercent;
    }

    calculateLeadSetter(kWhSize: number) {
        return kWhSize * this.setter;
    }

    calculatePriceBeforeRoof(kWhSize: number, ppw: number) {
        return kWhSize * ppw * 1000;
    }

    calculateNetSystemPrice(
        kWhSize: number,
        ppw: number,
        dealerFeePercent: number,
        roofCost: number) {
        return ((kWhSize * ppw * 1000) +
            ((roofCost * dealerFeePercent) + roofCost));
    }

    calculateFederalTaxCredit(netSystemPrice: number) {
        return netSystemPrice * (30 / 100);
    }

    calculateNvRebate(kWhSize: number) {
        return kWhSize * 200;
    }

    calculateTotalAfterCredit(
        nvRebate: number,
        federalTaxCredit: number,
        netSystemPrice: number
    ) {
        if (this.isNVRebate && this.isFederalCredit) {
            return netSystemPrice - federalTaxCredit - nvRebate;
        } else if (!this.isNVRebate && this.isFederalCredit) {
            return netSystemPrice - federalTaxCredit;
        } else if (!this.isFederalCredit && this.isNVRebate) {
            return netSystemPrice - nvRebate;
        } else {
            return netSystemPrice;
        }
    }

    // =((700/1000)+5+(0/(6.365*1000)))/(1-0.195)
    calculateWishedPpw(audit: number, dealerFeePercent: number, kWhSize: number, basePrice: number) {
        return ((this.desiredKcms / 1000) + basePrice + (audit / (kWhSize * 1000))) / (1 - dealerFeePercent);
    }

    onIsLeadSetterChange(event: any) {
        console.log('onIsLeadSetterChange ', event);
        this.calculateLoans();
    }

    onIsFederalCreditChange(event: any) {
        console.log('onIsFederalCreditChange ', event);
        this.calculateLoans();
    }

    onIsNvRebateChange(event: any) {
        console.log('onIsNvRebateChange ', event);
        this.calculateLoans();
    }

    onBasePriceChange(event: any) {
        console.log('onBasePriceChange ', event);
        this.basePrice = this.numberVal(event);
        if (this.isOverrideBasePriceActive) {
            this.calculateLoans();
        }
    }

    onisOverrideBasePriceActiveChange(event: any) {
        console.log('onisOverrideBasePriceActiveChange ', event);
        this.calculateLoans();
    }

    onisOverridekWhSizeActiveChange(event: any) {
        console.log('onisOverridekWhSizeActiveChange ', event);
        this.calculateLoans();
    }

    onkWhSizeChange(event: any) {
        console.log('onkWhSizeChangeChange ', event);
        this.kWhSize = this.numberVal(event);
        if (this.isOverridekWhSizeActive) {
            this.calculateLoans();
        }
    }

    onPpwChange(event: any) {
        console.log('onPpwChange ', event);
        this.ppwGlobal = this.numberVal(event);
        this.calculateLoans();
    }

    calculateLoans() {
        this.bankLoans = this.bankLoans.map(bl => {
            bl.kWhSize = this.numberVal(this.isOverridekWhSizeActive ? this.kWhSize : bl.kWhSize);
            bl.base = this.numberVal(this.isOverrideBasePriceActive ? this.basePrice : bl.base);
            bl.ppw = this.ppwGlobal;

            const netSystemPrice = this.calculateNetSystemPrice(bl.kWhSize, bl.ppw, bl.dealerFeePercent, bl.roofCost);
            const nvRebate = this.calculateNvRebate(bl.kWhSize);
            const federalTaxCredit = this.calculateFederalTaxCredit(netSystemPrice);
            const priceBeforeRoof = this.calculatePriceBeforeRoof(bl.kWhSize, bl.ppw);
            const dealerFee = this.calculateDealerFeeAmount(priceBeforeRoof, bl.dealerFeePercent);
            const totalAfterCredits = this.calculateTotalAfterCredit(nvRebate, federalTaxCredit, netSystemPrice);
            const cms = this.calculateCms(bl.kWhSize, bl.ppw, bl.base, dealerFee, bl.audit, bl.leadSetter);

            this.netSystemPrice = netSystemPrice;
            this.federalTaxCredit = federalTaxCredit;
            this.nvRebate = nvRebate;
            this.totalAfterCredits = totalAfterCredits;
            return <BankLoan>{
                loanType: bl.loanType,
                dealerFeePercent: bl.dealerFeePercent,
                interest: bl.interest,
                term: bl.term,
                kWhSize: bl.kWhSize,
                ppw: bl.ppw,
                base: bl.base,
                dealerCost: bl.dealerCost,
                audit: bl.audit,
                roofCost: bl.roofCost,
                leadSetter: this.calculateLeadSetter(bl.kWhSize),
                priceBeforeRoof: this.calculatePriceBeforeRoof(bl.kWhSize, bl.ppw),
                netSystemPrice,
                federalTaxCredit,
                nvRebate,
                totalAfterCredits,
                dealerFee,
                wishedPpw: this.calculateWishedPpw(bl.audit, bl.dealerFeePercent, bl.kWhSize, bl.base),
                payment: this.calculatePayment2(bl.interest / 12, bl.term, totalAfterCredits, 0, 0),
                cms: cms,
                perKw: this.calculatePerKW(cms, bl.kWhSize)
            };
        });
    }

    numberVal(value) {
        if (value === '') {
            return 0;
        }
        return typeof value === 'string' ? parseFloat(value) : value;
    }

    loanTypeHeader(loanType: string) {
        return loanType.split(' ')[0];
    }
}
