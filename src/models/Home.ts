import { Produto } from '../entity/Produto'
import { Slider } from '../entity/Slider'
import { Categorias_Home } from '../entity/Categorias_Home'

export class Home{
    destaques: [Produto];
    sliders: [Slider];
    categoria: [Categorias_Home];

    constructor(destaques1, slides1, categoria1) {
        this.destaques = destaques1;
        this.sliders = slides1;
        this.categoria = categoria1;
    }
}
