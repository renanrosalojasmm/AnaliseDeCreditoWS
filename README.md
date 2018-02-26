# AnaliseDeCreditoWS

Aplicação em Nodejs que recebe dados no formato JSON e faz uma requisição para a API da Azure que especializada em classificação de crédito.
Abaixo, segue o exemplo do formato do objeto JSON:

{"objeto": 
		{"Inputs": {
        	   "input1":
                        [
                            {
                                "tipo_pessoa": "Fisica",
                                "tipo_sexo": "Feminino",
                                "idade": 50,
                                "bairro_padrao": "JD PLANALTO",
                                "cidade_padrao": "IRATI",
                                "uf_padrao": "PR",
                                "tipo_ocupacao": "Assalariado",
                                "cbo": "Trabalhadores dos serviços domésticos em geral",
                                "ramo_atividade": "Serviços",
                                "tempo_lt": 101,
                                "salario": 2000,
                                "possui_comercial": "Sim",
                                "cliente_diamante": "Sim",
                                "limite_diamante": 3331.6,
                                "cliente_novo": "Nao",
                                "perfil_compra": "comporsim",
                                "perc_comp_compors": 214,
                                "perc_comp_pmes": 34,
                                "atraso_dia": 24,
                                "media": 7.83,
                                "total_compras": 120,
                                "compras_comporsim": 79,
                                "compras_compornao": 41,
                                "total_parcelas": 445,
                                "parcelas_comporsim": 420,
                                "parcelas_compornao": 25,
                                "parcelas_pagas": 402,
                                "parcelas_pagas_comporsim": 377,
                                "parcelas_pagas_compornao": 25,
                                "idfilial": 10047,
                                "linha": "{02}",
                                "numero_parcelas": 12,
                                "valor_avista": 1013.58,
                                "total_pedido": 1530.48,
                                "percentual_entrada": 0,
                                "entregar": "Sim",
                                "bairro_entrega": "JD PLANALTO",
                                "cidade_entrega": "IRATI",
                                "uf_entrega": "PR",
                                "idpropostacredito": 24731,
                                "fiador": "Nao",
                                "negado_financeira": "Nao",
                                "situacao_serasa": "Nada consta",
                                "score_serasa": 672,
                                "score_spc": 1,
                                "restricao_analisar": "Nao",
                                "perfil_pagador": ""
                            }
                        ]
                },
                "GlobalParameters": {}
            }
		}	
