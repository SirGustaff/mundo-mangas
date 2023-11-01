import { Editoras } from '../Editora/editoras';
import { Categorias } from '../Categoria/categorias';

export interface ProductsPage {
    items: Produtos[];
    totalPages: number;
    totalItems: number;
    currentPage: number;
}

export interface Produtos {
    id: number;
    nome: string;
    paginas: string;
    uriFoto: string;
    dataPublicacao: string;
    preco: number;
    estoque: number;
    totalVendido: number;
    ativo: boolean;
    colorido: boolean;
    editora: Editoras;
    categorias: Categorias[];
    descricao: string;
}