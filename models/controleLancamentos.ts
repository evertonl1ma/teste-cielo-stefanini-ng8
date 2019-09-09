import { LancamentoContaCorrentCliente } from './lancamentoContaCorrenteCliente';

export class ControleLancamentos {

	codigoIdentificadorUnico: string;

	dataEfetivaLancamento: string;

	dataLancamentoContaCorrenteCliente: string;

	dateEfetivaLancamento: Date;

	dateLancamentoContaCorrenteCliente: Date;

	descricaoGrupoPagamento: string;

	nomeBanco: string;

	numeroEvento: number;

	numeroRaizCNPJ: string;

	numeroSufixoCNPJ: string;

	quantidadeLancamentoRemessa: number;

	valorLancamentoRemessa: number;

	lancamentoContaCorrenteCliente: LancamentoContaCorrentCliente;
}