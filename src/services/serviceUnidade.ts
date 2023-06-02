
import Unidade from "../databases/models/unidade";
import { AppDataSource } from "../databases/connections/data-source";
import { CANCELLED } from "dns";


const cursor = AppDataSource.getRepository(Unidade);

type newUnidadeRequest = {
  descricao_unidade: string;
  carga_horaria_unidade: number;
  ordem: number;
  fk_curso: string;
};

type findOneUnidadeRequest = {
  descricao_unidade: string;
};

type updateUnidadeRequest = {
  descricao_unidade: string;
  carga_horaria_unidade: number;
  ordem: number;
  fk_curso: string;
}


//Cria um serviço da UNIDADE
export class UnidadeService {
  async create({
    descricao_unidade,
    carga_horaria_unidade,
    ordem,
    fk_curso,
  }: newUnidadeRequest): Promise<Unidade | Error> {
    if (await cursor.findOne({ where: { descricao_unidade } })) {
      return new Error("Unidade já cadastrada");
    }
    const unidade = cursor.create({
      descricao_unidade,
      carga_horaria_unidade,
      ordem,
      fk_curso,
    });
    await cursor.save(unidade);
    return unidade;
  }

  async readAll(): Promise<Unidade[]> {
    const unidades = await cursor.find();
    return unidades;
  }

  async readOne({ descricao_unidade }: findOneUnidadeRequest): Promise<Unidade | Error> {
    const unidade = await cursor.findOne({ where: { descricao_unidade } });

    if (!unidade) {
      return new Error("Unidade não encontrada!");
    }

    return unidade;
  }

  async update({
    descricao_unidade,
    carga_horaria_unidade,
    ordem,
    fk_curso,
  }: updateUnidadeRequest): Promise<Unidade | Error> {
    const unidade = await cursor.findOne({ where: { descricao_unidade} })
    if (!unidade) {
      return new Error("Unidade não encontrada!")
    }

    unidade.descricao_unidade = descricao_unidade
    ? descricao_unidade
    : unidade.descricao_unidade
    unidade.carga_horaria_unidade = carga_horaria_unidade
    ?carga_horaria_unidade
    : unidade.carga_horaria_unidade
    unidade.ordem = ordem ? ordem : unidade.ordem
    unidade.fk_curso ? fk_curso : unidade.fk_curso

    await cursor.save(unidade)

    return unidade
  }

  async delete({ descricao_unidade }: findOneUnidadeRequest ) {
    const unidade = await cursor.findOne({ where: {descricao_unidade }})
    if (!unidade) {
    return new Error("Não encontrado a turma!")
    }
    await cursor.delete(unidade)
    return unidade
  }
}




  






export class UpdateUnidadeService {
  
}


