import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DicaWikiService {
  private temas: { tema: string; imagemId: number }[] = [
    { tema: 'Sustentabilidade', imagemId: 1025 },
    { tema: 'Reciclagem', imagemId: 1062 },
    { tema: 'Água potável', imagemId: 1011 },
    { tema: 'Energia renovável', imagemId: 1043 },
    { tema: 'Desmatamento', imagemId: 1024 },
    { tema: 'Mudanças climáticas', imagemId: 1003 },
    { tema: 'Consumo consciente', imagemId: 1027 },
    { tema: 'Poluição', imagemId: 1039 },
    { tema: 'Biodiversidade', imagemId: 1020 },
    { tema: 'Compostagem', imagemId: 1056 },
    { tema: 'Aquecimento global', imagemId: 1005 },
    { tema: 'Reflorestamento', imagemId: 1012 },
    { tema: 'Pegada ecológica', imagemId: 1033 },
    { tema: 'Energia solar', imagemId: 1041 },
    { tema: 'Energia eólica', imagemId: 1051 },
    { tema: 'Energia limpa', imagemId: 1060 },
    { tema: 'Descarte de lixo', imagemId: 1008 },
    { tema: 'Lixo eletrônico', imagemId: 1019 },
    { tema: 'Plástico', imagemId: 1028 },
    { tema: 'Desperdício de água', imagemId: 1037 },
    { tema: 'Desperdício de alimentos', imagemId: 1046 },
    { tema: 'Transporte sustentável', imagemId: 1055 },
    { tema: 'Mobilidade urbana', imagemId: 1063 },
    { tema: 'Agricultura sustentável', imagemId: 1006 },
    { tema: 'Alimentação orgânica', imagemId: 1015 },
    { tema: 'Produtos biodegradáveis', imagemId: 1023 },
    { tema: 'Ecoeficiência', imagemId: 1032 },
    { tema: 'Eco-friendly', imagemId: 1040 },
    { tema: 'Preservação ambiental', imagemId: 1054 },
    { tema: 'Recursos naturais', imagemId: 1061 },
    { tema: 'Mata Atlântica', imagemId: 1007 },
    { tema: 'Amazônia', imagemId: 1014 },
    { tema: 'Cerrado', imagemId: 1022 },
    { tema: 'Caatinga', imagemId: 1031 },
    { tema: 'Pantanal', imagemId: 1044 },
    { tema: 'Fauna', imagemId: 1053 },
    { tema: 'Flora', imagemId: 1064 },
    { tema: 'Espécies ameaçadas', imagemId: 1009 },
    { tema: 'Poluição do ar', imagemId: 1018 },
    { tema: 'Poluição da água', imagemId: 1026 },
    { tema: 'Poluição do solo', imagemId: 1035 },
    { tema: 'Efeito estufa', imagemId: 1042 },
    { tema: 'Ciclo da água', imagemId: 1052 },
    { tema: 'Ciclo do carbono', imagemId: 1065 },
    { tema: 'Ciclo do nitrogênio', imagemId: 1004 },
    { tema: 'Energia geotérmica', imagemId: 1013 },
    { tema: 'Energia das marés', imagemId: 1021 },
    { tema: 'Energia hidrelétrica', imagemId: 1030 },
    { tema: 'Energia nuclear', imagemId: 1045 },
    { tema: 'Energia de biomassa', imagemId: 1058 },
    { tema: 'Compostagem doméstica', imagemId: 1066 },
    { tema: 'Coleta seletiva', imagemId: 1002 },
    { tema: 'Resíduos sólidos', imagemId: 1010 },
    { tema: 'Resíduos perigosos', imagemId: 1029 },
    { tema: 'Resíduos hospitalares', imagemId: 1038 },
    { tema: 'Reciclagem de papel', imagemId: 1047 },
    { tema: 'Reciclagem de vidro', imagemId: 1057 },
    { tema: 'Reciclagem de plástico', imagemId: 1068 },
    { tema: 'Reciclagem de metal', imagemId: 1001 },
    { tema: 'Reciclagem de óleo', imagemId: 1016 },
    { tema: 'Reciclagem de pilhas', imagemId: 1020 },
    { tema: 'Reciclagem de baterias', imagemId: 1034 },
    { tema: 'Reciclagem de pneus', imagemId: 1048 },
    { tema: 'Reciclagem de eletrodomésticos', imagemId: 1059 },
    { tema: 'Reciclagem de eletrônicos', imagemId: 1067 },
    { tema: 'Saneamento básico', imagemId: 1003 },
    { tema: 'Água de reuso', imagemId: 1017 },
    { tema: 'Captação de água da chuva', imagemId: 1029 },
    { tema: 'Desenvolvimento sustentável', imagemId: 1049 },
    { tema: 'Educação ambiental', imagemId: 1069 },
    { tema: 'Consumo sustentável', imagemId: 1002 },
    { tema: 'Comércio justo', imagemId: 1018 },
    { tema: 'Justiça ambiental', imagemId: 1036 },
    { tema: 'Cidadania ambiental', imagemId: 1050 },
    { tema: 'Unidades de conservação', imagemId: 1063 },
    { tema: 'Parques nacionais', imagemId: 1004 },
    { tema: 'Reserva biológica', imagemId: 1012 },
    { tema: 'Reserva extrativista', imagemId: 1021 },
    { tema: 'Reserva legal', imagemId: 1030 },
    { tema: 'Corredores ecológicos', imagemId: 1048 },
    { tema: 'Serviços ecossistêmicos', imagemId: 1067 },
    { tema: 'Mudança do clima', imagemId: 1005 },
    { tema: 'Gases do efeito estufa', imagemId: 1013 },
    { tema: 'Carbono neutro', imagemId: 1027 },
    { tema: 'Neutralização de carbono', imagemId: 1039 },
    { tema: 'Pegada de carbono', imagemId: 1052 },
    { tema: 'Pegada hídrica', imagemId: 1068 },
    { tema: 'Gestão ambiental', imagemId: 1001 },
    { tema: 'Licenciamento ambiental', imagemId: 1016 },
    { tema: 'Política ambiental', imagemId: 1032 },
    { tema: 'Legislação ambiental', imagemId: 1047 },
    { tema: 'Fiscalização ambiental', imagemId: 1061 },
    { tema: 'Responsabilidade socioambiental', imagemId: 1008 },
    { tema: 'Consciência ambiental', imagemId: 1019 },
    { tema: 'Atitude sustentável', imagemId: 1035 },
    { tema: 'Cidades sustentáveis', imagemId: 1053 },
    { tema: 'Economia circular', imagemId: 1064 },
    { tema: 'Economia verde', imagemId: 1006 },
    { tema: 'Consumo colaborativo', imagemId: 1017 },
    { tema: 'ODS', imagemId: 1031 },
    { tema: 'Agenda 2030', imagemId: 1049 },
    { tema: 'ONU Meio Ambiente', imagemId: 1066 }
  ];

  constructor(private http: HttpClient) {}

  getDicaAleatoria() {
    const item = this.temas[Math.floor(Math.random() * this.temas.length)];
    const url = `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(item.tema)}`;
    return this.http.get<any>(url).pipe(
      map(res => ({
        ...res,
        imagem: `https://picsum.photos/id/${item.imagemId}/800/400`
      }))
    );
  }
}
