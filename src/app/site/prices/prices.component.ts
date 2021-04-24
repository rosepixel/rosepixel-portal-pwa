import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-prices',
    templateUrl: './prices.component.html',
    styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

    public plans = [{
        id: 1,
        name: "Plano Bronze",
        price: 10.0,
        roles: [{
            description: "Sempre Grátis"
        }, {
            description: "Não possui acesso a API"
        }, {
            description: "Não possui suporte"
        }, {
            description: "Não possui relatórios"
        }, {
            description: "Não possui SLA"
        }]
    }, {
        id: 2,
        name: "Plano Prata",
        price: 25.0,
        roles: [{
            description: "Sempre Grátis"
        }, {
            description: "Não possui acesso a API"
        }, {
            description: "Não possui suporte"
        }, {
            description: "Não possui relatórios"
        }, {
            description: "Não possui SLA"
        }]
    }, {
        id: 3,
        name: "Plano Ouro",
        price: 150.0,
        roles: [{
            description: "Sempre Grátis"
        }, {
            description: "Não possui acesso a API"
        }, {
            description: "Não possui suporte"
        }, {
            description: "Não possui relatórios"
        }, {
            description: "Não possui SLA"
        }]
    }, {
        id: 3,
        name: "Plano Diamante",
        price: 1200.0,
        roles: [{
            description: "Usuários Ilimitados"
        }, {
            description: "Acesso a API"
        }, {
            description: "Suporte 24 Horas"
        }, {
            description: "Relatórios Preditivos com IA"
        }, {
            description: "SLA de 99%"
        }]
    }];

    constructor() { }

    ngOnInit(): void {
    }

}
