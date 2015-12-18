export class BindingToLocalData {
    jobGrowth = [
        {
            growth: -2500,
            jobs: 50000,
            applications: 500000,
            company: "Microsoft"
        }, {
            growth: 500,
            jobs: 110000,
            applications: 7600000,
            company: "Starbucks"
        }, {
            growth: 7000,
            jobs: 19000,
            applications: 700000,
            company: "Google"
        }, {
            growth: 1400,
            jobs: 150000,
            applications: 700000,
            company: "Publix Super Markets"
        }, {
            growth: 2400,
            jobs: 30000,
            applications: 300000,
            company: "PricewaterhouseCoopers"
        }, {
            growth: 2450,
            jobs: 34000,
            applications: 90000,
            company: "Cisco"
        }, {
            growth: 2700,
            jobs: 34000,
            applications: 400000,
            company: "Accenture"
        }, {
            growth: 2900,
            jobs: 40000,
            applications: 450000,
            company: "Deloitte"
        }, {
            growth: 3000,
            jobs: 55000,
            applications: 900000,
            company: "Whole Foods Market"
        }
    ];

    title = {
      text: "Job Growth for 2011"
    };

    legend = {
        visible: false
    };

    series = [{
        type: "bubble",
        xField: "growth",
        yField: "jobs",
        sizeField: "applications",
        categoryField: "company"
    }];

    xAxis = {
        labels: {
            format: "{0:N0}",
            skip: 1
        },
        axisCrossingValue: -5000,
        majorUnit: 2000,
        plotBands: [{
            from: -5000,
            to: 0,
            color: "#00f",
            opacity: 0.05
        }]
    };

    yAxis = {
        labels: {
            format: "{0:N0}"
        },
        line: {
            width: 0
        }
    };

    tooltip = {
        visible: true,
        format: "{3}: {2:N0} applications",
        opacity: 1
    };
}
