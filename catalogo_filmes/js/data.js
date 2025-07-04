const filmes = [
    {
        "id": 1,
        "titulo": "Better Call Saul",
        "resumo": "Jimmy era um advogado qualquer at\u00e9 a vida o transformar em Saul, o cara que coloca criminosos dentro da lei.",
        "generos": [
            "S\u00e9ries",
            "S\u00e9ries dos EUA",
            "S\u00e9ries C\u00f4micas",
            "S\u00e9ries Dram\u00e1ticas"
        ],
        "titulosSemelhantes": [
            2,
            3
        ],
        "classificacao": 18,
        "figura": "https:\/\/rafaelescalfoni.github.io\/desenv_web\/img\/betterCallSaul.jpg",
        "elenco": [
            "Bob Odenkirk",
            "Jonathan Banks",
            "Michael McKean",
            "Rhea Seehorn"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "Estou ansioso pelos pr\u00f3ximos epis\u00f3dios. Sou f\u00e3 de Breaking Bad e estou confiante que essa s\u00e9rie ser\u00e1 um grande sucesso."
            },
            {
                "rating": 5,
                "descricao": "Ansioso para ver. Vai ser demais! \"Advogados s\u00e3o como planos de sa\u00fade, voc\u00ea espera nunca precisar, mas cara... N\u00e3o ter um ... N\u00c3O!\" \\o\/ "
            }
        ]
    },
    {
        "id": 2,
        "titulo": "Breaking Bad",
        "resumo": "\u00c0 beira da morte, um professor passa a fabricar metanfetamina pelo futuro da fam\u00edlia, mudando o destino de todos.",
        "generos": [
            "S\u00e9ries",
            "S\u00e9ries dos EUA",
            "S\u00e9ries Dram\u00e1ticas",
            "Dramas para TV sobre crimes"
        ],
        "titulosSemelhantes": [
            1,
            3,
            4
        ],
        "classificacao": 18,
        "figura": "https:\/\/rafaelescalfoni.github.io\/desenv_web\/img\/breakingBad.png",
        "elenco": [
            "Bryan Cranston",
            "Aaron Paul",
            "Anna Gunn",
            "Dean Norris"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "\u00d3tima s\u00e9rie! Uma das melhores dos \u00faltimos tempos. Quando a quinta temporada completa estar\u00e1 completa?"
            },
            {
                "rating": 5,
                "descricao": "S\u00e9rie excelente!"
            }
        ]
    },
    {
        "id": 3,
        "titulo": "House of Cards",
        "resumo": "\u00c9 verdade que o poder corrompe? O congressista Frank Underwood est\u00e1 pronto para descobrir.",
        "generos": [
            "S\u00e9ries",
            "S\u00e9ries dos EUA",
            "S\u00e9ries Dram\u00e1ticas"
        ],
        "titulosSemelhantes": [
            1,
            2,
            4
        ],
        "classificacao": 16,
        "figura": "https:\/\/rafaelescalfoni.github.io\/desenv_web\/img\/houseOfCards.png",
        "elenco": [
            "Kevin Spacey",
            "Robin Wright",
            "Kate Mara",
            "Corey Stoll",
            "Michael Kelly"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "Uma nova era para web! Essa s\u00e9rie, sua estreia e temporada completa ao resto do mundo"
            }
        ]
    },
    {
        "id": 4,
        "titulo": "Narcos",
        "resumo": "Primeiro, a mercadoria. Segundo, as rotas. Quando o dinheiro corre solto, a pr\u00f3xima parada \u00e9 o poder.",
        "generos": [
            "S\u00e9ries",
            "S\u00e9ries dos EUA",
            "TV policial violenta"
        ],
        "titulosSemelhantes": [
            1,
            2,
            3
        ],
        "classificacao": 16,
        "figura": "https:\/\/rafaelescalfoni.github.io\/desenv_web\/img\/narcos.png",
        "elenco": [
            "Wagner Moura",
            "Boyd Holbrook",
            "Pedro Pascal",
            "Joanna Christie"
        ],
        "opinioes": [
            {
                "rating": 4,
                "descricao": "Tudo para ser uma \u00f3tima s\u00e9rie."
            }
        ]
    },
    {
        "id": 5,
        "titulo": "Carros",
        "resumo": "Um carro de corrida aprende que a vida \u00e9 mais do que fama e gl\u00f3ria. E voc\u00ea achava que o seu carro tinha personalidade!",
        "generos": [
            "Filmes para a fam\u00edlia e crian\u00e7as",
            "Filme para 2 e 4 anos"
        ],
        "titulosSemelhantes": [
            6,
            8
        ],
        "classificacao": 0,
        "figura": "https:\/\/rafaelescalfoni.github.io\/desenv_web\/img\/carros.png",
        "elenco": [
            "Owen Wilson",
            "Larry the Cable Guy",
            "Michael Caine"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "Excelente desenho! Meu filho adorou!!!"
            }
        ]
    },
    {
        "id": 6,
        "titulo": "Carros 2",
        "resumo": "A caminho da Europa para participar do Grand Prix Mundial, o carro de corridas Rel\u00e2mpago McQueen se envolve em divertidas e misteriosas intrigas internacionais.",
        "generos": [
            "Filmes para a fam\u00edlia e crian\u00e7as",
            "Filme para 2 e 4 anos"
        ],
        "titulosSemelhantes": [
            5,
            8
        ],
        "classificacao": 0,
        "figura": "https:\/\/rafaelescalfoni.github.io\/desenv_web\/img\/carros2.png",
        "elenco": [
            "Owen Wilson",
            "Larry the Cable Guy",
            "Michael Caine"
        ],
        "opinioes": [
            {
                "rating": 4,
                "descricao": "Bom filme!"
            }
        ]
    },
    {
        "id": 7,
        "titulo": "Uma Fam\u00edlia da Pesada",
        "resumo": "Nesta s\u00e9rie animada sem escr\u00fapulos de Seth MacFarlane, o c\u00f4mico Peter Griffin e sua fam\u00edlia problem\u00e1tica passam por desventuras tresloucadas.",
        "generos": [
            "S\u00e9ries",
            "S\u00e9ries dos EUA",
            "S\u00e9ries c\u00f4micas"
        ],
        "titulosSemelhantes": [
            1,
            2
        ],
        "classificacao": 12,
        "figura": "https:\/\/rafaelescalfoni.github.io\/desenv_web\/img\/familyGuy.png",
        "elenco": [
            "Seth MacFarlane",
            "Alex Borstein"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "Coloquem novas temporadas, por favor!"
            }
        ]
    },
    {
        "id": 8,
        "titulo": "Valente",
        "resumo": "Ap\u00f3s enfurecer tr\u00eas lordes poderosos e ter um pedido impensado atendido, uma indom\u00e1vel princesa escocesa come\u00e7a sua jornada para reparar os estragos que causou.",
        "generos": [
            "Filmes para a fam\u00edlia e crian\u00e7as",
            "Filmes para 4 a 7 anos"
        ],
        "titulosSemelhantes": [
            5,
            6
        ],
        "classificacao": 0,
        "figura": "https:\/\/rafaelescalfoni.github.io\/desenv_web\/img\/valente.png",
        "elenco": [
            "Kelly Macdonald",
            "Billy Connolly",
            "Emma Thompson"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "\u00d3timo filme! Adoro filmes assim"
            },
            {
                "rating": 4,
                "descricao": "\u00f3timo filme! Encantador, prende a aten\u00e7\u00e3o o tempo todo!"
            }
        ]
    },
    {
        "id": 9,
        "titulo": "Friends",
        "resumo": "Esta s\u00e9rie de enorme sucesso acompanha as aventuras de seis amigos que enfrentam as armadilhas da vida, do trabalho e do amor nos anos 1990.",
        "generos": [
            "S\u00e9ries",
            "S\u00e9ries dos EUA",
            "S\u00e9ries c\u00f4micas",
            "sitcoms"
        ],
        "titulosSemelhantes": [
            14
        ],
        "classificacao": 12,
        "figura": "https:\/\/rafaelescalfoni.github.io\/desenv_web\/img\/friends.png",
        "elenco": [
            "Jennifer Aniston",
            "Courteney Cox",
            "Lisa Kudrow",
            "Matt LeBlanc",
            "Matthew Perry",
            "David Schwimmer"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "Estou sentido falta das primeiras temporadas!"
            },
            {
                "rating": 3,
                "descricao": "Boa s\u00e9rie... dos anos 1990!!!"
            }
        ]
    },
    {
        "id": 10,
        "titulo": "House",
        "resumo": "Hugh Laurie \u00e9 o mal-humorado Dr. Gregory House, um m\u00e9dico que odeia seus pacientes mas que \u00e9 um g\u00eanio ao tratar doen\u00e7as misteriosas.",
        "generos": [
            "S\u00e9ries",
            "S\u00e9ries dos EUA",
            "S\u00e9ries dram\u00e1ticas"
        ],
        "titulosSemelhantes": [],
        "classificacao": 14,
        "figura": "https:\/\/rafaelescalfoni.github.io\/desenv_web\/img\/house.png",
        "elenco": [
            "Hugh Laurie",
            "Omar Epps",
            "Robert Sean Leonard"
        ],
        "opinioes": [
            {
                "rating": 4,
                "descricao": "Boa pedida!"
            }
        ]
    },
    {
        "id": 11,
        "titulo": "M\u00e3os talentosas",
        "resumo": "Cuba Gooding Jr. \u00e9 um cirurgi\u00e3o pedi\u00e1trico que supera grandes obst\u00e1culos para estudar medicina e salvar vidas no Hospital Johns Hopkins.",
        "generos": [
            "Dramas",
            "Dramas biogr\u00e1ficos",
            "Dramas baseados em fatos reais"
        ],
        "titulosSemelhantes": [],
        "classificacao": 12,
        "figura": "https:\/\/rafaelescalfoni.github.io\/desenv_web\/img\/maosTalentosas.png",
        "elenco": [
            "Seth MacFarlane",
            "Alex Borstein"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "Coloquem novas temporadas, por favor!"
            }
        ]
    },
    {
        "id": 12,
        "titulo": "Fam\u00edlia Moderna",
        "resumo": "Esta s\u00e9rie vencedora do Emmy acompanha a vida de Jay Pritchett e sua ecl\u00e9tica fam\u00edlia enquanto lidam com os desafios da vida contempor\u00e2nea em Los Angeles.",
        "generos": [
            "S\u00e9ries",
            "S\u00e9ries dos EUA",
            "S\u00e9ries c\u00f4micas"
        ],
        "titulosSemelhantes": [
            14,
            9
        ],
        "classificacao": 10,
        "figura": "https:\/\/rafaelescalfoni.github.io\/desenv_web\/img\/modernFamily.png",
        "elenco": [
            "Ed O'Neill",
            "Sofia Vergara",
            "Julie Bowen"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "Coloquem novas temporadas, por favor!"
            }
        ]
    },
    {
        "id": 13,
        "titulo": "Scarface",
        "resumo": "Um chef\u00e3o do tr\u00e1fico da Fl\u00f3rida comete o erro fatal de \"abusar do seu pr\u00f3prio suprimento\", nesta refilmagem do diretor Brian de Palma do original de 1932.",
        "generos": [
            "A\u00e7\u00e3o e aventura",
            "Suspenses de a\u00e7\u00e3o",
            "Cl\u00e1ssicos de a\u00e7\u00e3o e aventura"
        ],
        "titulosSemelhantes": [],
        "classificacao": 18,
        "figura": "https:\/\/rafaelescalfoni.github.io\/desenv_web\/img\/scarface.png",
        "elenco": [
            "Al Pacino",
            "Steven Bauer",
            "Michelle Pfeiffer"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "Coloquem novas temporadas, por favor!"
            }
        ]
    },
    {
        "id": 14,
        "titulo": "That '70s show",
        "resumo": "Jovens ",
        "generos": [
            "S\u00e9ries",
            "S\u00e9ries dos EUA",
            "S\u00e9ries c\u00f4micas"
        ],
        "titulosSemelhantes": [
            1,
            2
        ],
        "classificacao": 12,
        "figura": "https:\/\/rafaelescalfoni.github.io\/desenv_web\/img\/that70s.png",
        "elenco": [
            "Topher Grace",
            "Mila Kunis",
            "Ashton Kutcher",
            "Danny Masterson",
            "Laura Prepon",
            "Wilmer Valderrama",
            "Debra Jo Rupp",
            "Kurtwood Smith",
            "Don Stark",
            "Tanya Roberts"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "J\u00e1 estava na hora de adicion\u00e1-la! Muito boa!!!"
            }
        ]
    },
    {
        "id": 15,
        "titulo": "Zumbil\u00e2ndia",
        "resumo": "Tentando sobreviver em um mundo dominado por zumbis, um universit\u00e1rio se une a um desordeiro e duas irm\u00e3s golpistas.",
        "generos": [
            "Com\u00e9dias",
            "Com\u00e9dias obscuras"
        ],
        "titulosSemelhantes": [],
        "classificacao": 16,
        "figura": "https:\/\/rafaelescalfoni.github.io\/desenv_web\/img\/zumbilandia.png",
        "elenco": [
            "Jesse Eisenberg",
            "Woody Harrelson",
            "Emma Stone"
        ],
        "opinioes": [
            {
                "rating": 5,
                "descricao": "Excelente filme! Irreverente!"
            }
        ]
    }
]