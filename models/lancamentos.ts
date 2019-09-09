import { ControleLancamentos } from './controleLancamentos';
import { TotalControleLancamento } from './totalControleLancamentos';

export class Lancamento {

	indice: number;

	listaControleLancamento: ControleLancamentos[];

	tamanhoPagina: number;

	totalControleLancamento: TotalControleLancamento;

	totalElements: number;

}