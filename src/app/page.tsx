"use client";

import { useState } from "react";
import { Search, BookOpen, Sparkles, TrendingUp, FileText, Briefcase, Copy, Check, ChevronDown, ChevronUp, Menu, X } from "lucide-react";

// Dados dos 30 prompts
const prompts = {
  marketing: [
    {
      id: 1,
      title: "Estratégia de Lançamento Digital",
      description: "Crie um plano completo de lançamento para produtos digitais no mercado brasileiro",
      prompt: `Você é um especialista em lançamentos digitais no Brasil. Crie uma estratégia completa de lançamento para:

Produto: [NOME DO PRODUTO]
Nicho: [SEU NICHO]
Público-alvo: [DESCREVA SEU PÚBLICO]
Ticket: R$ [VALOR]
Prazo de lançamento: [DIAS]

Inclua:
1. Cronograma de pré-lançamento (aquecimento)
2. Estratégia de conteúdo para redes sociais brasileiras
3. Sequência de e-mails (considerando fuso horário brasileiro)
4. Gatilhos mentais adaptados à cultura brasileira
5. Estratégia de afiliados e parcerias
6. Plano de tráfego pago (Meta Ads e Google Ads)
7. Previsão de faturamento realista para o mercado BR`,
      tags: ["Lançamento", "Estratégia", "Vendas"]
    },
    {
      id: 2,
      title: "Copy para Anúncios Meta Ads",
      description: "Gere copies de alta conversão para Facebook e Instagram Ads",
      prompt: `Crie 5 variações de copy para anúncios no Meta Ads (Facebook/Instagram) para o mercado brasileiro:

Produto/Serviço: [DESCREVA]
Público-alvo: [IDADE, GÊNERO, INTERESSES]
Objetivo: [VENDAS/LEADS/TRÁFEGO]
Orçamento diário: R$ [VALOR]
Diferencial: [PRINCIPAL BENEFÍCIO]

Para cada copy, inclua:
- Headline impactante (máx. 40 caracteres)
- Texto principal (máx. 125 caracteres para feed)
- Call-to-action específico
- Emoji estratégico
- Gatilho mental usado
- Sugestão de imagem/vídeo

Adapte a linguagem para o público brasileiro, usando gírias e referências culturais quando apropriado.`,
      tags: ["Meta Ads", "Copywriting", "Tráfego Pago"]
    },
    {
      id: 3,
      title: "Funil de Vendas Completo",
      description: "Estruture um funil de vendas otimizado para o mercado brasileiro",
      prompt: `Desenhe um funil de vendas completo para o mercado brasileiro:

Negócio: [TIPO DE NEGÓCIO]
Produto principal: [PRODUTO]
Ticket médio: R$ [VALOR]
Público: [DESCREVA]

Crie:
1. TOPO DE FUNIL (Atração)
   - Iscas digitais gratuitas
   - Conteúdos para redes sociais
   - Estratégia de SEO local

2. MEIO DE FUNIL (Relacionamento)
   - Sequência de e-mails (5-7 emails)
   - Conteúdo educativo
   - Webinars/lives

3. FUNDO DE FUNIL (Conversão)
   - Página de vendas
   - Argumentos de venda
   - Garantias e bônus

4. PÓS-VENDA
   - Onboarding
   - Upsell/Cross-sell
   - Programa de indicação

Considere particularidades do consumidor brasileiro (formas de pagamento, objeções comuns, etc).`,
      tags: ["Funil", "Vendas", "Estratégia"]
    },
    {
      id: 4,
      title: "E-mail Marketing de Conversão",
      description: "Crie sequências de e-mail que vendem no mercado brasileiro",
      prompt: `Crie uma sequência de 7 e-mails de vendas para o mercado brasileiro:

Produto: [NOME]
Preço: R$ [VALOR]
Público: [DESCREVA]
Objeção principal: [QUAL É]

Para cada e-mail, forneça:
- Assunto (com teste A/B)
- Preview text
- Corpo do e-mail
- CTA específico
- Melhor horário de envio (considerando fuso BR)
- PS estratégico

Sequência:
Dia 1: Apresentação + História
Dia 2: Educação + Valor
Dia 3: Prova social brasileira
Dia 4: Quebra de objeções
Dia 5: Urgência (escassez real)
Dia 6: Último aviso
Dia 7: Carrinho abandonado

Use linguagem conversacional brasileira e gatilhos culturais locais.`,
      tags: ["E-mail Marketing", "Conversão", "Automação"]
    },
    {
      id: 5,
      title: "Estratégia de Conteúdo para Instagram",
      description: "Planeje conteúdo estratégico para crescer no Instagram brasileiro",
      prompt: `Crie um plano de conteúdo de 30 dias para Instagram focado no público brasileiro:

Nicho: [SEU NICHO]
Objetivo: [VENDAS/AUTORIDADE/COMUNIDADE]
Público-alvo: [DESCREVA]
Produto/Serviço: [OPCIONAL]

Forneça:
1. ESTRATÉGIA GERAL
   - Pilares de conteúdo (3-4 pilares)
   - Frequência de postagem
   - Melhor horário para o público BR

2. CALENDÁRIO 30 DIAS
   - 15 ideias de Reels (com hooks brasileiros)
   - 10 carrosséis educativos
   - 5 posts de engajamento
   - Stories diários (temas)

3. COPY E HASHTAGS
   - Modelo de legenda para cada tipo
   - 30 hashtags brasileiras do nicho
   - CTAs variados

4. ESTRATÉGIA DE CRESCIMENTO
   - Colaborações
   - Trends brasileiros
   - Engajamento em comunidades

Inclua referências culturais e linguagem brasileira autêntica.`,
      tags: ["Instagram", "Redes Sociais", "Conteúdo"]
    },
    {
      id: 6,
      title: "Página de Vendas de Alta Conversão",
      description: "Estruture uma VSL ou página de vendas otimizada para brasileiros",
      prompt: `Crie a estrutura completa de uma página de vendas para o mercado brasileiro:

Produto: [NOME]
Preço: R$ [VALOR]
Nicho: [QUAL]
Avatar: [DESCREVA DETALHADAMENTE]

Estruture:
1. HEADLINE
   - Principal (com benefício claro)
   - Sub-headline (amplificação)

2. ABERTURA
   - Hook emocional
   - Identificação com o público BR

3. PROBLEMA
   - Dores específicas do brasileiro
   - Agitação (sem exagero)

4. SOLUÇÃO
   - Apresentação do produto
   - Como funciona (passo a passo)

5. PROVA SOCIAL
   - Depoimentos brasileiros autênticos
   - Resultados em R$
   - Cases de sucesso locais

6. OFERTA
   - Preço e parcelamento (Pix/Boleto/Cartão)
   - Bônus irresistíveis
   - Garantia (adaptada à lei brasileira)

7. FAQ
   - 10 objeções comuns do público BR

8. CTA FINAL
   - Urgência real
   - Último empurrão

Use linguagem persuasiva mas autêntica, evitando promessas irreais.`,
      tags: ["VSL", "Página de Vendas", "Copywriting"]
    },
    {
      id: 7,
      title: "Campanha de WhatsApp Marketing",
      description: "Crie estratégias de vendas via WhatsApp para o Brasil",
      prompt: `Desenvolva uma estratégia completa de WhatsApp Marketing para o Brasil:

Negócio: [TIPO]
Produto: [NOME]
Ticket: R$ [VALOR]
Base de contatos: [TAMANHO]

Crie:
1. ESTRUTURA DE LISTAS
   - Segmentação de contatos
   - Critérios de qualificação
   - Listas broadcast

2. FLUXO DE CONVERSAÇÃO
   - Mensagem de boas-vindas
   - Sequência de nutrição (5 mensagens)
   - Abordagem de vendas
   - Tratamento de objeções
   - Fechamento

3. CONTEÚDO
   - 10 mensagens de valor
   - 5 ofertas diferentes
   - Áudios vs textos (quando usar cada)
   - Uso estratégico de figurinhas brasileiras

4. AUTOMAÇÃO
   - Respostas rápidas
   - Chatbot básico
   - Horários de atendimento

5. MÉTRICAS
   - KPIs para acompanhar
   - Taxa de conversão esperada

Considere as particularidades do WhatsApp no Brasil (uso massivo, preferências de comunicação).`,
      tags: ["WhatsApp", "Vendas", "Conversão"]
    },
    {
      id: 8,
      title: "Estratégia de Tráfego Orgânico",
      description: "Planeje crescimento orgânico em múltiplas plataformas brasileiras",
      prompt: `Crie uma estratégia de tráfego orgânico multiplataforma para o Brasil:

Nicho: [SEU NICHO]
Objetivo: [LEADS/VENDAS/AUTORIDADE]
Recursos: [TEMPO E EQUIPE DISPONÍVEL]
Prazo: [MESES]

Desenvolva estratégia para:

1. INSTAGRAM
   - Tipo de conteúdo
   - Frequência
   - Estratégia de Reels
   - Crescimento de seguidores

2. TIKTOK
   - Trends brasileiros
   - Formato de vídeos
   - Hashtags locais
   - Viralização

3. YOUTUBE
   - Temas de vídeos
   - SEO para busca brasileira
   - Thumbnails e títulos
   - Shorts strategy

4. GOOGLE (SEO)
   - Palavras-chave BR
   - Conteúdo blog
   - Link building local

5. PINTEREST (se aplicável)
   - Pins para público brasileiro
   - Boards estratégicos

6. INTEGRAÇÃO
   - Como conectar todas as plataformas
   - Reaproveitamento de conteúdo
   - Funil multiplataforma

Foque em estratégias realistas e sustentáveis para o mercado brasileiro.`,
      tags: ["Tráfego Orgânico", "SEO", "Redes Sociais"]
    },
    {
      id: 9,
      title: "Webinar de Vendas Brasileiro",
      description: "Roteirize um webinar de alta conversão para o público BR",
      prompt: `Crie o roteiro completo de um webinar de vendas para o mercado brasileiro:

Produto: [NOME]
Preço: R$ [VALOR]
Duração: [MINUTOS]
Público: [DESCREVA]

Estruture:

1. PRÉ-WEBINAR (15 min antes)
   - Música/vídeo de espera
   - Interação no chat
   - Instruções técnicas

2. ABERTURA (5 min)
   - Apresentação pessoal
   - Quebra de objeções iniciais
   - Regras do webinar

3. CONTEÚDO (40 min)
   - 3 pilares de conteúdo valioso
   - Histórias brasileiras
   - Demonstração prática
   - Prova social ao vivo

4. TRANSIÇÃO (5 min)
   - Ponte para oferta
   - Preparação emocional

5. OFERTA (20 min)
   - Apresentação do produto
   - Preço e condições BR (Pix, boleto, cartão)
   - Bônus exclusivos
   - Garantia
   - Escassez real

6. PERGUNTAS (10 min)
   - FAQ estratégico
   - Quebra de objeções

7. FECHAMENTO (5 min)
   - Último CTA
   - Urgência final

Inclua:
- Scripts palavra por palavra
- Slides sugeridos
- Momentos de interação
- Gatilhos mentais brasileiros
- Timing exato`,
      tags: ["Webinar", "Vendas", "Apresentação"]
    },
    {
      id: 10,
      title: "Estratégia de Afiliados Brasil",
      description: "Monte um programa de afiliados lucrativo para o mercado brasileiro",
      prompt: `Desenvolva um programa completo de afiliados para o Brasil:

Produto: [NOME]
Preço: R$ [VALOR]
Comissão: [%]
Nicho: [QUAL]

Crie:

1. ESTRUTURA DO PROGRAMA
   - Modelo de comissionamento
   - Regras claras
   - Política de cookies
   - Conformidade com leis brasileiras

2. MATERIAIS PARA AFILIADOS
   - 10 e-mails prontos
   - 20 posts para redes sociais
   - 5 banners (descrição)
   - 3 vídeos de divulgação (roteiro)
   - Página de captura exclusiva

3. ESTRATÉGIA DE RECRUTAMENTO
   - Onde encontrar afiliados BR
   - Pitch de recrutamento
   - Critérios de seleção
   - Onboarding

4. TREINAMENTO
   - Aula 1: Como promover
   - Aula 2: Tráfego pago para afiliados
   - Aula 3: Tráfego orgânico
   - Aula 4: Conversão e vendas

5. GAMIFICAÇÃO
   - Ranking de afiliados
   - Prêmios e bonificações
   - Desafios mensais

6. PLATAFORMAS
   - Hotmart, Eduzz, Monetizze (comparação)
   - Configuração recomendada

7. SUPORTE
   - Canal de comunicação
   - FAQ para afiliados
   - Materiais de apoio

Foque em criar um programa atrativo e sustentável para afiliados brasileiros.`,
      tags: ["Afiliados", "Parcerias", "Escalabilidade"]
    }
  ],
  conteudo: [
    {
      id: 11,
      title: "Roteiro de Vídeo Viral",
      description: "Crie roteiros de vídeos curtos com potencial viral para o público brasileiro",
      prompt: `Crie 5 roteiros de vídeos curtos (Reels/TikTok/Shorts) com potencial viral para o Brasil:

Nicho: [SEU NICHO]
Objetivo: [VIEWS/SEGUIDORES/VENDAS]
Duração: [15-60 SEGUNDOS]
Público: [DESCREVA]

Para cada roteiro, forneça:

1. CONCEITO
   - Ideia central
   - Por que pode viralizar no BR

2. HOOK (3 primeiros segundos)
   - Frase de abertura impactante
   - Visual sugerido
   - Texto na tela

3. DESENVOLVIMENTO (meio)
   - Sequência de cenas
   - Falas/narração
   - Transições
   - Música sugerida (trends BR)

4. CTA FINAL
   - Call-to-action claro
   - Direcionamento

5. ELEMENTOS TÉCNICOS
   - Legenda/copy
   - Hashtags brasileiras
   - Melhor horário de postagem
   - Thumbnail (se YouTube)

6. VARIAÇÕES
   - Como adaptar para diferentes plataformas
   - Versões A/B para testar

Use referências culturais brasileiras, gírias atuais e trends locais. Evite cópias de conteúdo gringo.`,
      tags: ["Vídeo", "Viral", "Redes Sociais"]
    },
    {
      id: 12,
      title: "Artigo de Blog SEO",
      description: "Escreva artigos otimizados para SEO e público brasileiro",
      prompt: `Crie um artigo de blog completo otimizado para SEO no Brasil:

Palavra-chave principal: [KEYWORD]
Palavras-chave secundárias: [LSI KEYWORDS]
Intenção de busca: [INFORMACIONAL/TRANSACIONAL]
Público: [DESCREVA]
Tamanho: [PALAVRAS]

Estruture:

1. TÍTULO SEO
   - Título principal (com keyword)
   - Meta description (155 caracteres)
   - URL amigável

2. INTRODUÇÃO (150 palavras)
   - Hook que prende atenção
   - Promessa do artigo
   - Keyword nos primeiros 100 caracteres

3. ESTRUTURA H2/H3
   - 5-7 subtítulos otimizados
   - Distribuição natural de keywords
   - Perguntas que brasileiros fazem

4. CONTEÚDO
   - Parágrafos curtos (3-4 linhas)
   - Linguagem brasileira natural
   - Exemplos locais
   - Dados e estatísticas do Brasil
   - Listas e bullet points

5. ELEMENTOS VISUAIS
   - Sugestões de imagens
   - Infográficos
   - Vídeos complementares

6. LINKS
   - Internos (estrutura de site)
   - Externos (autoridade)
   - Anchor texts naturais

7. CTA
   - Call-to-action relevante
   - Conversão natural

8. FAQ SCHEMA
   - 5 perguntas frequentes
   - Respostas diretas
   - Otimização para featured snippet

Escreva pensando no leitor brasileiro, usando linguagem acessível mas profissional.`,
      tags: ["SEO", "Blog", "Conteúdo"]
    },
    {
      id: 13,
      title: "Carrossel Educativo Instagram",
      description: "Crie carrosséis de alto engajamento para Instagram brasileiro",
      prompt: `Desenvolva 3 carrosséis educativos para Instagram focados no público brasileiro:

Tema: [ASSUNTO]
Nicho: [SEU NICHO]
Objetivo: [EDUCAR/VENDER/ENGAJAR]
Público: [DESCREVA]

Para cada carrossel (8-10 slides), forneça:

1. CAPA (Slide 1)
   - Título impactante
   - Design sugerido (cores, layout)
   - Emoji estratégico
   - Promessa clara

2. SLIDES INTERNOS (2-9)
   - Conteúdo de cada slide
   - Hierarquia de informação
   - Dicas de design
   - Progressão lógica
   - Storytelling visual

3. CTA FINAL (Slide 10)
   - Call-to-action específico
   - Direcionamento claro
   - Design de fechamento

4. LEGENDA
   - Copy completo (até 2.200 caracteres)
   - Hook inicial
   - Desenvolvimento
   - CTA na legenda
   - Quebras de linha estratégicas

5. HASHTAGS
   - 20-30 hashtags brasileiras
   - Mix de tamanhos (grande/médio/pequeno)
   - Específicas do nicho

6. ENGAJAMENTO
   - Pergunta nos comentários
   - Incentivo ao compartilhamento
   - Salvamento

Use linguagem brasileira autêntica, referências culturais locais e design que funciona no feed brasileiro.`,
      tags: ["Instagram", "Carrossel", "Educação"]
    },
    {
      id: 14,
      title: "Script de Podcast",
      description: "Roteirize episódios de podcast envolventes para ouvintes brasileiros",
      prompt: `Crie o roteiro completo de um episódio de podcast para o público brasileiro:

Nome do podcast: [NOME]
Episódio: [NÚMERO E TÍTULO]
Tema: [ASSUNTO]
Duração: [MINUTOS]
Formato: [SOLO/ENTREVISTA/PAINEL]
Público: [DESCREVA]

Estruture:

1. ABERTURA (2 min)
   - Vinheta/música
   - Apresentação do host
   - Contexto do episódio
   - Promessa de valor

2. INTRODUÇÃO DO TEMA (5 min)
   - Por que esse tema importa
   - Contexto brasileiro
   - Histórias/dados locais
   - Gancho emocional

3. DESENVOLVIMENTO (30-40 min)
   - Estrutura em blocos
   - Pontos principais (3-5)
   - Histórias e exemplos BR
   - Momentos de reflexão
   - Transições naturais

4. SEGMENTOS ESPECIAIS
   - Dica rápida
   - Pergunta do ouvinte
   - Momento "curiosidade"

5. PATROCÍNIO (se houver)
   - Integração natural
   - Script de anúncio
   - Código de desconto

6. ENCERRAMENTO (3 min)
   - Resumo dos pontos
   - CTA claro
   - Próximo episódio
   - Agradecimentos

7. ELEMENTOS TÉCNICOS
   - Marcações de tempo
   - Pausas estratégicas
   - Momentos de edição
   - Trilha sonora sugerida

8. SHOW NOTES
   - Descrição do episódio
   - Timestamps
   - Links mencionados
   - Transcrição de trechos

Use linguagem conversacional brasileira, gírias naturais e referências culturais que conectam com o ouvinte.`,
      tags: ["Podcast", "Áudio", "Roteiro"]
    },
    {
      id: 15,
      title: "Newsletter Engajadora",
      description: "Escreva newsletters que são lidas e geram ação no público brasileiro",
      prompt: `Crie uma newsletter semanal envolvente para o público brasileiro:

Nome da newsletter: [NOME]
Nicho: [ÁREA]
Frequência: [SEMANAL/QUINZENAL]
Objetivo: [EDUCAR/VENDER/ENGAJAR]
Público: [DESCREVA]

Estruture:

1. ASSUNTO DO E-MAIL
   - Linha de assunto principal
   - Variação A/B
   - Preview text
   - Emoji estratégico

2. ABERTURA PESSOAL (100 palavras)
   - Saudação calorosa
   - Conexão pessoal
   - Contexto da semana
   - Linguagem brasileira autêntica

3. CONTEÚDO PRINCIPAL
   - Tema da semana
   - 3 insights valiosos
   - Histórias e exemplos BR
   - Dados relevantes
   - Aplicação prática

4. SEÇÕES FIXAS
   - "Descoberta da Semana"
   - "Dica Rápida"
   - "Link Útil"
   - "Reflexão"

5. CONTEÚDO VISUAL
   - GIF ou imagem sugerida
   - Posicionamento estratégico
   - Alt text

6. CTA PRINCIPAL
   - Ação específica
   - Botão ou link
   - Benefício claro

7. P.S. ESTRATÉGICO
   - Informação adicional
   - Segundo CTA (soft)
   - Conexão emocional

8. RODAPÉ
   - Links sociais
   - Preferências
   - Descadastro

9. MÉTRICAS
   - Taxa de abertura esperada
   - Taxa de clique esperada
   - Melhor dia/hora para envio (BR)

Escreva como se estivesse conversando com um amigo brasileiro, mantendo profissionalismo mas sendo autêntico.`,
      tags: ["Newsletter", "E-mail", "Conteúdo"]
    },
    {
      id: 16,
      title: "E-book Completo",
      description: "Estruture um e-book de valor para o mercado brasileiro",
      prompt: `Crie a estrutura completa de um e-book para o público brasileiro:

Título: [TÍTULO DO E-BOOK]
Nicho: [ÁREA]
Páginas: [NÚMERO]
Objetivo: [EDUCAR/GERAR LEADS/VENDER]
Público: [DESCREVA DETALHADAMENTE]

Desenvolva:

1. CAPA E ELEMENTOS INICIAIS
   - Título e subtítulo
   - Descrição da capa
   - Página de direitos autorais
   - Dedicatória (opcional)
   - Sobre o autor

2. SUMÁRIO DETALHADO
   - Estrutura de capítulos (8-12)
   - Subcapítulos
   - Páginas estimadas

3. INTRODUÇÃO (5 páginas)
   - Por que este e-book existe
   - Para quem é
   - O que o leitor vai aprender
   - Como usar o material
   - Contexto brasileiro

4. CAPÍTULOS (desenvolvimento completo)
   Para cada capítulo:
   - Título e objetivo
   - Introdução do capítulo
   - Conteúdo principal (tópicos)
   - Exemplos brasileiros
   - Exercícios práticos
   - Resumo do capítulo
   - Ação imediata

5. ELEMENTOS VISUAIS
   - Sugestões de infográficos
   - Checklists
   - Templates
   - Gráficos e tabelas
   - Citações destacadas

6. BÔNUS
   - Materiais complementares
   - Planilhas/ferramentas
   - Links úteis brasileiros

7. CONCLUSÃO (3 páginas)
   - Recapitulação
   - Próximos passos
   - Motivação final
   - CTA claro

8. RECURSOS ADICIONAIS
   - Glossário (se necessário)
   - Bibliografia/fontes
   - Sobre o autor (expandido)

9. DESIGN E FORMATAÇÃO
   - Paleta de cores
   - Tipografia
   - Layout de páginas
   - Elementos gráficos

Escreva conteúdo denso mas acessível, com linguagem brasileira clara e exemplos práticos locais.`,
      tags: ["E-book", "Conteúdo Longo", "Lead Magnet"]
    },
    {
      id: 17,
      title: "Storytelling de Marca",
      description: "Desenvolva narrativas de marca que conectam com brasileiros",
      prompt: `Crie a história de marca completa para conectar com o público brasileiro:

Marca: [NOME]
Segmento: [ÁREA DE ATUAÇÃO]
Valores: [PRINCIPAIS VALORES]
Público: [AVATAR DETALHADO]
Diferencial: [O QUE TE TORNA ÚNICO]

Desenvolva:

1. ORIGEM DA MARCA
   - Como tudo começou
   - Momento "eureka"
   - Desafios iniciais
   - Contexto brasileiro
   - Conexão emocional

2. MISSÃO E PROPÓSITO
   - Por que a marca existe
   - Problema que resolve
   - Impacto desejado
   - Visão de futuro
   - Linguagem inspiradora

3. VALORES E CULTURA
   - 5 valores principais
   - Como se manifestam
   - Exemplos práticos
   - Conexão com cultura brasileira

4. JORNADA DO FUNDADOR
   - História pessoal
   - Transformação
   - Aprendizados
   - Vulnerabilidade autêntica
   - Elementos brasileiros

5. MANIFESTO DA MARCA
   - Declaração poderosa
   - Posicionamento claro
   - Chamado à ação
   - Linguagem emocional
   - Identidade brasileira

6. HISTÓRIAS DE CLIENTES
   - 3 casos de transformação
   - Antes e depois
   - Depoimentos autênticos
   - Resultados mensuráveis
   - Contexto brasileiro

7. APLICAÇÕES
   - Sobre nós (site)
   - Bio de redes sociais
   - Apresentação de vendas
   - Conteúdo de marca
   - Comunicação interna

8. TOM E VOZ
   - Personalidade da marca
   - Como se comunica
   - O que fala/não fala
   - Exemplos de frases
   - Adaptação ao público BR

Use storytelling autêntico, evite clichês, conecte emocionalmente com valores brasileiros.`,
      tags: ["Storytelling", "Branding", "Marca"]
    },
    {
      id: 18,
      title: "Conteúdo para LinkedIn",
      description: "Crie posts de autoridade para LinkedIn focado em profissionais brasileiros",
      prompt: `Desenvolva 10 posts de autoridade para LinkedIn focados no público profissional brasileiro:

Nicho: [SUA ÁREA]
Objetivo: [AUTORIDADE/LEADS/NETWORKING]
Persona: [PROFISSIONAL QUE QUER ATINGIR]
Tom: [INSPIRADOR/EDUCATIVO/PROVOCATIVO]

Para cada post, forneça:

1. FORMATO
   - Tipo (texto/carrossel/vídeo/artigo)
   - Estrutura ideal

2. CONTEÚDO
   - Hook poderoso (primeira linha)
   - Desenvolvimento (storytelling ou lista)
   - Insights valiosos
   - Dados/estatísticas BR
   - Exemplos do mercado brasileiro

3. ELEMENTOS VISUAIS
   - Imagem/documento sugerido
   - Design profissional
   - Branding sutil

4. ENGAJAMENTO
   - Pergunta final
   - CTA para comentários
   - Incentivo ao compartilhamento

5. HASHTAGS
   - 3-5 hashtags profissionais
   - Mix de alcance
   - Específicas do mercado BR

6. MELHOR HORÁRIO
   - Dia e hora para postar
   - Considerando rotina profissional BR

TEMAS SUGERIDOS:
- Lições de carreira
- Tendências do mercado BR
- Casos de sucesso
- Erros e aprendizados
- Insights de indústria
- Liderança e gestão
- Inovação e tecnologia
- Desenvolvimento profissional
- Networking estratégico
- Futuro do trabalho no Brasil

Use linguagem profissional mas acessível, evite jargões desnecessários, conecte com realidade do mercado brasileiro.`,
      tags: ["LinkedIn", "B2B", "Autoridade"]
    },
    {
      id: 19,
      title: "Guia Prático Passo a Passo",
      description: "Crie guias práticos e acionáveis para o público brasileiro",
      prompt: `Desenvolva um guia prático completo para o público brasileiro:

Tema: [ASSUNTO DO GUIA]
Objetivo: [O QUE O LEITOR VAI CONSEGUIR FAZER]
Nível: [INICIANTE/INTERMEDIÁRIO/AVANÇADO]
Público: [DESCREVA]
Formato: [PDF/POST/VÍDEO]

Estruture:

1. INTRODUÇÃO
   - O que é este guia
   - Para quem serve
   - Resultados esperados
   - Tempo necessário
   - Materiais/ferramentas (adaptados ao BR)

2. PRÉ-REQUISITOS
   - O que você precisa saber antes
   - Recursos necessários
   - Investimento (em R$)
   - Preparação inicial

3. PASSO A PASSO DETALHADO
   Para cada passo (8-15 passos):
   - Título claro do passo
   - Objetivo específico
   - Instruções detalhadas
   - Prints/imagens sugeridas
   - Dicas práticas
   - Erros comuns (e como evitar)
   - Tempo estimado
   - Checkpoint de validação

4. EXEMPLOS PRÁTICOS
   - 3 casos reais brasileiros
   - Aplicação em diferentes contextos
   - Adaptações possíveis

5. FERRAMENTAS E RECURSOS
   - Lista completa
   - Alternativas gratuitas
   - Disponibilidade no Brasil
   - Links diretos

6. TROUBLESHOOTING
   - Problemas comuns
   - Soluções práticas
   - Quando pedir ajuda

7. PRÓXIMOS PASSOS
   - O que fazer depois
   - Como evoluir
   - Recursos adicionais

8. CHECKLIST FINAL
   - Lista de verificação completa
   - Formato imprimível
   - Acompanhamento de progresso

9. FAQ
   - 10 perguntas frequentes
   - Respostas diretas e práticas

Use linguagem clara, instruções precisas, exemplos visuais e foco total em ação e resultados.`,
      tags: ["Guia", "Tutorial", "Prático"]
    },
    {
      id: 20,
      title: "Conteúdo Interativo",
      description: "Crie conteúdos interativos que engajam o público brasileiro",
      prompt: `Desenvolva 5 ideias de conteúdo interativo para o público brasileiro:

Nicho: [SUA ÁREA]
Plataforma: [ONDE SERÁ USADO]
Objetivo: [ENGAJAMENTO/LEADS/VENDAS]
Público: [DESCREVA]

Para cada ideia, forneça:

1. QUIZ/TESTE
   - Título atrativo
   - 10 perguntas estratégicas
   - Opções de resposta
   - Lógica de pontuação
   - 4-5 resultados possíveis
   - Descrição de cada resultado
   - CTA baseado no resultado
   - Compartilhamento social

2. CALCULADORA
   - O que calcula
   - Campos de entrada
   - Fórmula/lógica
   - Resultado visual
   - Interpretação dos números
   - Próximos passos
   - Captura de lead

3. ENQUETE/VOTAÇÃO
   - Pergunta polêmica/interessante
   - Opções de resposta
   - Contexto brasileiro
   - Discussão nos comentários
   - Revelação de resultados
   - Insights compartilháveis

4. DESAFIO
   - Nome do desafio
   - Duração (7/21/30 dias)
   - Regras claras
   - Tarefas diárias
   - Sistema de acompanhamento
   - Comunidade/grupo
   - Prêmios/reconhecimento
   - Hashtag brasileira

5. FERRAMENTA INTERATIVA
   - Tipo de ferramenta
   - Funcionalidade principal
   - Interface sugerida
   - Inputs do usuário
   - Output/resultado
   - Valor entregue
   - Gamificação
   - Compartilhamento

ELEMENTOS COMUNS:
- Design mobile-first (brasileiro usa muito mobile)
- Linguagem descontraída
- Resultados compartilháveis
- Captura de dados estratégica
- Integração com redes sociais BR
- Gatilhos de curiosidade
- Personalização

Foque em criar experiências que brasileiros queiram compartilhar e participar ativamente.`,
      tags: ["Interativo", "Engajamento", "Gamificação"]
    }
  ],
  negocios: [
    {
      id: 21,
      title: "Plano de Negócios Completo",
      description: "Estruture um plano de negócios sólido para o mercado brasileiro",
      prompt: `Crie um plano de negócios completo para o mercado brasileiro:

Nome do negócio: [NOME]
Segmento: [ÁREA]
Modelo: [PRODUTO/SERVIÇO/SAAS/MARKETPLACE]
Investimento inicial: R$ [VALOR]
Prazo: [MESES/ANOS]

Desenvolva:

1. SUMÁRIO EXECUTIVO
   - Visão geral do negócio
   - Proposta de valor única
   - Mercado-alvo brasileiro
   - Projeção financeira resumida
   - Investimento necessário

2. ANÁLISE DE MERCADO
   - Tamanho do mercado no Brasil
   - Tendências e crescimento
   - Segmentação
   - Comportamento do consumidor BR
   - Sazonalidades

3. ANÁLISE COMPETITIVA
   - Concorrentes diretos (BR)
   - Concorrentes indiretos
   - Análise SWOT detalhada
   - Diferenciação competitiva
   - Barreiras de entrada

4. PÚBLICO-ALVO
   - Personas detalhadas (3-4)
   - Demografia brasileira
   - Psicografia
   - Dores e desejos
   - Jornada de compra
   - Ticket médio esperado

5. PRODUTO/SERVIÇO
   - Descrição detalhada
   - Benefícios principais
   - Processo de entrega
   - Precificação (em R$)
   - Margem de lucro
   - Escalabilidade

6. ESTRATÉGIA DE MARKETING
   - Posicionamento
   - Canais de aquisição
   - Funil de vendas
   - Orçamento de marketing
   - CAC e LTV esperados
   - Estratégia de conteúdo

7. OPERAÇÕES
   - Estrutura organizacional
   - Processos principais
   - Fornecedores brasileiros
   - Tecnologia necessária
   - Logística (se aplicável)

8. PLANO FINANCEIRO (3 anos)
   - Investimento inicial detalhado
   - Projeção de receita
   - Custos fixos e variáveis
   - Fluxo de caixa
   - Ponto de equilíbrio
   - ROI esperado

9. RISCOS E MITIGAÇÃO
   - Riscos identificados
   - Planos de contingência
   - Aspectos legais brasileiros
   - Compliance e regulamentação

10. CRONOGRAMA
   - Marcos principais
   - Timeline de implementação
   - Métricas de sucesso

Use dados realistas do mercado brasileiro, considere particularidades locais (impostos, burocracia, cultura).`,
      tags: ["Plano de Negócios", "Estratégia", "Empreendedorismo"]
    },
    {
      id: 22,
      title: "Pitch para Investidores",
      description: "Crie um pitch deck convincente para investidores brasileiros",
      prompt: `Desenvolva um pitch deck completo para investidores brasileiros:

Startup: [NOME]
Setor: [ÁREA]
Estágio: [PRÉ-SEED/SEED/SÉRIE A]
Captação: R$ [VALOR]
Valuation: R$ [VALOR]

Crie apresentação de 15 slides:

SLIDE 1 - CAPA
- Nome e logo
- Tagline impactante
- Contato

SLIDE 2 - PROBLEMA
- Dor específica do mercado brasileiro
- Tamanho do problema (dados)
- Impacto financeiro
- Urgência

SLIDE 3 - SOLUÇÃO
- Sua solução única
- Como funciona (simples)
- Diferencial tecnológico
- Demo ou screenshot

SLIDE 4 - PRODUTO
- Funcionalidades principais
- Roadmap de produto
- Propriedade intelectual
- Tecnologia

SLIDE 5 - MERCADO
- TAM, SAM, SOM no Brasil
- Crescimento do setor
- Tendências favoráveis
- Oportunidade em R$

SLIDE 6 - MODELO DE NEGÓCIO
- Como ganha dinheiro
- Pricing (em R$)
- Unit economics
- LTV/CAC
- Margem

SLIDE 7 - TRAÇÃO
- Métricas principais
- Crescimento (MoM/YoY)
- Clientes/usuários
- Receita (se houver)
- Milestones alcançados

SLIDE 8 - ESTRATÉGIA DE GO-TO-MARKET
- Canais de aquisição
- Estratégia de vendas
- Parcerias estratégicas
- Plano de expansão

SLIDE 9 - COMPETIÇÃO
- Matriz competitiva
- Seu posicionamento único
- Vantagens competitivas
- Barreiras de entrada

SLIDE 10 - TIME
- Fundadores (foto e bio)
- Experiência relevante
- Advisors
- Gaps a preencher

SLIDE 11 - PROJEÇÃO FINANCEIRA
- Receita projetada (3-5 anos)
- Principais premissas
- Uso do capital
- Runway

SLIDE 12 - INVESTIMENTO
- Valor captando
- Equity oferecido
- Uso dos recursos (breakdown)
- Milestones com o capital

SLIDE 13 - VISÃO DE SAÍDA
- Potenciais acquirers
- Comparáveis de mercado
- Retorno esperado para investidor
- Timeline

SLIDE 14 - PERGUNTAS FREQUENTES
- Antecipe objeções
- Respostas preparadas

SLIDE 15 - CONTATO
- Informações completas
- CTA claro
- Próximos passos

Para cada slide, forneça:
- Conteúdo textual
- Sugestão visual
- Narrativa (o que falar)
- Dados de apoio

Use linguagem confiante mas realista, dados do mercado brasileiro, comparações locais.`,
      tags: ["Pitch", "Investimento", "Startup"]
    },
    {
      id: 23,
      title: "Análise de Viabilidade",
      description: "Avalie a viabilidade de uma ideia de negócio no Brasil",
      prompt: `Conduza uma análise completa de viabilidade para o mercado brasileiro:

Ideia de negócio: [DESCREVA]
Setor: [ÁREA]
Investimento estimado: R$ [VALOR]
Prazo de análise: [MESES]

Analise:

1. VIABILIDADE DE MERCADO
   - Existe demanda no Brasil?
   - Tamanho do mercado potencial
   - Crescimento do setor
   - Sazonalidade
   - Tendências favoráveis/desfavoráveis
   - Comportamento do consumidor BR
   - Disposição a pagar

2. VIABILIDADE TÉCNICA
   - É tecnicamente possível?
   - Recursos necessários
   - Tecnologia disponível no BR
   - Complexidade de implementação
   - Tempo de desenvolvimento
   - Fornecedores e parceiros
   - Infraestrutura necessária

3. VIABILIDADE FINANCEIRA
   - Investimento inicial detalhado
   - Custos fixos mensais
   - Custos variáveis
   - Receita potencial
   - Margem de lucro
   - Ponto de equilíbrio
   - Payback
   - ROI projetado (3 anos)
   - Necessidade de capital de giro

4. VIABILIDADE LEGAL
   - Regulamentação brasileira
   - Licenças necessárias
   - Aspectos tributários
   - Propriedade intelectual
   - Contratos necessários
   - Compliance
   - Riscos legais

5. VIABILIDADE OPERACIONAL
   - Processos necessários
   - Equipe mínima
   - Fornecedores brasileiros
   - Logística (se aplicável)
   - Escalabilidade
   - Gargalos operacionais

6. ANÁLISE COMPETITIVA
   - Concorrentes no Brasil
   - Saturação do mercado
   - Diferenciação possível
   - Barreiras de entrada
   - Vantagens competitivas

7. ANÁLISE DE RISCOS
   - Riscos de mercado
   - Riscos operacionais
   - Riscos financeiros
   - Riscos regulatórios
   - Probabilidade e impacto
   - Planos de mitigação

8. CENÁRIOS
   - Cenário otimista
   - Cenário realista
   - Cenário pessimista
   - Projeções para cada

9. RECOMENDAÇÃO FINAL
   - Viável ou não?
   - Condições para viabilidade
   - Ajustes necessários
   - Próximos passos
   - Timeline sugerido

10. PLANO DE VALIDAÇÃO
   - MVP sugerido
   - Testes de mercado
   - Métricas de validação
   - Investimento mínimo para testar

Seja rigoroso e realista, use dados do mercado brasileiro, considere particularidades locais.`,
      tags: ["Viabilidade", "Análise", "Planejamento"]
    },
    {
      id: 24,
      title: "Estratégia de Precificação",
      description: "Defina a estratégia de preços ideal para o mercado brasileiro",
      prompt: `Desenvolva uma estratégia completa de precificação para o Brasil:

Produto/Serviço: [NOME]
Setor: [ÁREA]
Público-alvo: [DESCREVA]
Custos: [RESUMO DE CUSTOS]
Concorrência: [PREÇOS PRATICADOS]

Analise e defina:

1. ANÁLISE DE CUSTOS
   - Custos fixos mensais
   - Custos variáveis por unidade
   - Custos de aquisição (CAC)
   - Impostos brasileiros (detalhado)
   - Margem mínima necessária
   - Ponto de equilíbrio

2. ANÁLISE DE VALOR
   - Valor percebido pelo cliente BR
   - Benefícios quantificáveis
   - ROI para o cliente
   - Comparação com alternativas
   - Disposição a pagar (pesquisa)
   - Sensibilidade a preço

3. ANÁLISE COMPETITIVA
   - Preços dos concorrentes (em R$)
   - Posicionamento de cada
   - Diferenciais justificam preço?
   - Gaps de mercado
   - Oportunidades de precificação

4. ESTRATÉGIAS DE PRECIFICAÇÃO
   Avalie cada uma:
   - Custo + Margem
   - Baseada em valor
   - Competitiva
   - Penetração
   - Skimming
   - Freemium
   - Qual a melhor para seu caso?

5. ESTRUTURA DE PREÇOS
   - Preço base (em R$)
   - Tiers/planos (se aplicável)
   - Diferenciação entre planos
   - Upsells e cross-sells
   - Preço de entrada vs premium

6. FORMAS DE PAGAMENTO
   - À vista (desconto?)
   - Parcelamento (quantas vezes?)
   - Recorrência (mensal/anual)
   - Pix (desconto adicional?)
   - Boleto
   - Cartão de crédito
   - Impacto de cada forma

7. PSICOLOGIA DE PREÇOS
   - Ancoragem
   - Preço charm (R$ 97 vs R$ 100)
   - Decoy pricing
   - Bundling
   - Escassez e urgência
   - Garantia e risco reverso

8. TESTES E OTIMIZAÇÃO
   - Variações para testar
   - Metodologia de teste
   - Métricas para acompanhar
   - Quando ajustar preços
   - Comunicação de mudanças

9. PROMOÇÕES E DESCONTOS
   - Quando fazer promoções
   - Tipos de desconto
   - Cupons estratégicos
   - Black Friday/datas BR
   - Impacto na margem

10. PRECIFICAÇÃO POR SEGMENTO
   - B2C vs B2B
   - Diferentes personas
   - Regiões do Brasil
   - Volumes
   - Customização

11. COMUNICAÇÃO DE PREÇO
   - Como apresentar o preço
   - Justificativa de valor
   - Comparações
   - Transparência
   - Objeções comuns

12. RECOMENDAÇÃO FINAL
   - Preço sugerido (em R$)
   - Estrutura completa
   - Justificativa
   - Projeção de receita
   - Plano de implementação

Use dados do mercado brasileiro, considere poder aquisitivo local, impostos e particularidades culturais.`,
      tags: ["Precificação", "Estratégia", "Receita"]
    },
    {
      id: 25,
      title: "Modelo de Negócio Canvas",
      description: "Estruture seu modelo de negócio usando Business Model Canvas adaptado ao Brasil",
      prompt: `Desenvolva um Business Model Canvas completo adaptado ao mercado brasileiro:

Negócio: [NOME]
Setor: [ÁREA]
Estágio: [IDEIA/MVP/OPERANDO]

Preencha cada bloco detalhadamente:

1. SEGMENTOS DE CLIENTES
   - Quem são seus clientes no Brasil?
   - Personas principais (3-4)
   - Características demográficas BR
   - Comportamentos e necessidades
   - Tamanho de cada segmento
   - Priorização

2. PROPOSTA DE VALOR
   - Que problema resolve?
   - Benefícios principais
   - Diferencial único
   - Por que escolher você?
   - Valor quantificável
   - Proposta para cada segmento

3. CANAIS
   - Como alcança clientes?
   - Canais de comunicação
   - Canais de distribuição
   - Canais de venda
   - Canais de pós-venda
   - Efetividade de cada canal
   - Custo por canal

4. RELACIONAMENTO COM CLIENTES
   - Tipo de relacionamento
   - Aquisição de clientes
   - Retenção e fidelização
   - Crescimento (upsell)
   - Automação vs pessoal
   - Comunidade
   - Suporte

5. FONTES DE RECEITA
   - Como ganha dinheiro?
   - Modelo de receita principal
   - Receitas secundárias
   - Preço de cada fonte (R$)
   - Recorrência
   - Margem de cada
   - Projeção de mix de receita

6. RECURSOS PRINCIPAIS
   - Recursos físicos
   - Recursos intelectuais
   - Recursos humanos
   - Recursos financeiros
   - Tecnologia necessária
   - Parcerias críticas
   - Disponibilidade no Brasil

7. ATIVIDADES-CHAVE
   - Atividades de produção
   - Atividades de marketing
   - Atividades de vendas
   - Atividades de suporte
   - Atividades de gestão
   - Processos críticos
   - Terceirização vs interno

8. PARCERIAS PRINCIPAIS
   - Fornecedores brasileiros
   - Parceiros estratégicos
   - Alianças
   - Joint ventures
   - Comunidades
   - Tipo de parceria
   - Benefícios de cada

9. ESTRUTURA DE CUSTOS
   - Custos fixos (detalhado)
   - Custos variáveis (detalhado)
   - Economias de escala
   - Economias de escopo
   - Custos principais
   - Otimizações possíveis
   - Impostos brasileiros

10. ANÁLISE INTEGRADA
   - Coerência do modelo
   - Pontos fortes
   - Vulnerabilidades
   - Oportunidades de melhoria
   - Escalabilidade
   - Sustentabilidade

11. MÉTRICAS-CHAVE
   - KPIs principais
   - Metas por métrica
   - Frequência de acompanhamento

12. VALIDAÇÃO
   - Hipóteses a testar
   - Experimentos sugeridos
   - Critérios de sucesso
   - Pivôs possíveis

13. ROADMAP
   - Versão atual (MVP)
   - Próximas iterações
   - Visão de longo prazo
   - Timeline

Apresente de forma visual (descrição de como seria o canvas) e também textual detalhada. Foque em particularidades do mercado brasileiro.`,
      tags: ["Business Model", "Canvas", "Estratégia"]
    },
    {
      id: 26,
      title: "Estratégia de Crescimento",
      description: "Desenvolva um plano de crescimento escalável para negócios brasileiros",
      prompt: `Crie uma estratégia completa de crescimento para o mercado brasileiro:

Negócio: [NOME]
Estágio atual: [FATURAMENTO/CLIENTES]
Meta: [OBJETIVO EM 12 MESES]
Recursos: [EQUIPE E BUDGET]
Setor: [ÁREA]

Desenvolva:

1. DIAGNÓSTICO ATUAL
   - Situação atual (números)
   - Principais métricas
   - Gargalos de crescimento
   - Oportunidades não exploradas
   - Recursos disponíveis
   - Limitações

2. DEFINIÇÃO DE METAS
   - Meta principal (SMART)
   - Metas secundárias
   - KPIs de acompanhamento
   - Milestones trimestrais
   - Métricas de vaidade vs ação

3. ESTRATÉGIAS DE AQUISIÇÃO
   - Canais de aquisição atuais
   - Novos canais a explorar
   - Tráfego pago (Meta, Google, TikTok)
   - Tráfego orgânico (SEO, social)
   - Parcerias e afiliados
   - Indicação e referral
   - CAC por canal
   - Budget por canal

4. ESTRATÉGIAS DE ATIVAÇÃO
   - Onboarding otimizado
   - Primeiros passos críticos
   - Momento "aha"
   - Redução de fricção
   - Educação do cliente
   - Quick wins

5. ESTRATÉGIAS DE RETENÇÃO
   - Programa de fidelidade
   - Comunicação recorrente
   - Suporte proativo
   - Comunidade
   - Conteúdo exclusivo
   - Surpresas e encantamento
   - Redução de churn

6. ESTRATÉGIAS DE RECEITA
   - Aumento de ticket médio
   - Upsell e cross-sell
   - Novos produtos/serviços
   - Precificação dinâmica
   - Modelos de recorrência
   - Monetização de dados/audiência

7. ESTRATÉGIAS DE INDICAÇÃO
   - Programa de referral
   - Incentivos (para quem indica e indicado)
   - Viralização orgânica
   - Embaixadores de marca
   - UGC (conteúdo gerado por usuários)

8. GROWTH HACKS
   - 10 táticas de crescimento rápido
   - Específicas para o mercado BR
   - Baixo custo, alto impacto
   - Testes rápidos
   - Automações

9. OTIMIZAÇÃO DE CONVERSÃO
   - Funil atual (taxas)
   - Oportunidades de melhoria
   - Testes A/B prioritários
   - Landing pages
   - Checkout/pagamento
   - Redução de atrito

10. EXPANSÃO
   - Novos mercados (regiões BR)
   - Novos segmentos
   - Novos produtos
   - Parcerias estratégicas
   - Internacionalização (se aplicável)

11. TECNOLOGIA E AUTOMAÇÃO
   - Ferramentas necessárias
   - Automações de marketing
   - Automações de vendas
   - Automações de suporte
   - Integrações
   - ROI de cada ferramenta

12. EQUIPE E PROCESSOS
   - Estrutura de time
   - Contratações necessárias
   - Processos a implementar
   - Cultura de crescimento
   - OKRs e accountability

13. ORÇAMENTO
   - Investimento total
   - Alocação por estratégia
   - ROI esperado
   - Payback
   - Ajustes mensais

14. CRONOGRAMA
   - Plano de 90 dias (detalhado)
   - Plano de 6 meses
   - Plano de 12 meses
   - Responsáveis
   - Dependências

15. RISCOS E CONTINGÊNCIAS
   - Riscos identificados
   - Planos B
   - Indicadores de alerta
   - Pivôs possíveis

16. DASHBOARD DE ACOMPANHAMENTO
   - Métricas diárias
   - Métricas semanais
   - Métricas mensais
   - Relatórios
   - Reuniões de review

Seja ambicioso mas realista, foque em estratégias testadas no mercado brasileiro, priorize ações de alto impacto.`,
      tags: ["Growth", "Crescimento", "Escalabilidade"]
    },
    {
      id: 27,
      title: "Análise SWOT Detalhada",
      description: "Conduza uma análise SWOT profunda para negócios no Brasil",
      prompt: `Realize uma análise SWOT completa e acionável para o mercado brasileiro:

Negócio: [NOME]
Setor: [ÁREA]
Estágio: [ATUAL]
Contexto: [SITUAÇÃO ESPECÍFICA]

Desenvolva:

1. FORÇAS (STRENGTHS)
   Liste 10-15 forças internas:
   - Recursos únicos
   - Competências distintivas
   - Vantagens competitivas
   - Ativos valiosos
   - Capacidades superiores
   - Reputação e marca
   - Propriedade intelectual
   - Equipe e cultura
   - Processos eficientes
   - Relacionamentos estratégicos

   Para cada força:
   - Descrição detalhada
   - Por que é uma força?
   - Como capitalizar?
   - Evidências/dados

2. FRAQUEZAS (WEAKNESSES)
   Liste 10-15 fraquezas internas:
   - Limitações de recursos
   - Gaps de competência
   - Desvantagens competitivas
   - Processos ineficientes
   - Problemas de qualidade
   - Reputação negativa
   - Falta de diferenciação
   - Dependências críticas
   - Custos elevados
   - Limitações tecnológicas

   Para cada fraqueza:
   - Descrição honesta
   - Impacto no negócio
   - Plano de mitigação
   - Prioridade de resolução

3. OPORTUNIDADES (OPPORTUNITIES)
   Liste 10-15 oportunidades externas:
   - Tendências de mercado BR
   - Mudanças regulatórias
   - Avanços tecnológicos
   - Mudanças demográficas
   - Mudanças comportamentais
   - Gaps de mercado
   - Parcerias potenciais
   - Novos canais
   - Expansão geográfica
   - Novos segmentos

   Para cada oportunidade:
   - Descrição da oportunidade
   - Tamanho potencial (R$)
   - Timing (quando capturar)
   - Recursos necessários
   - Probabilidade de sucesso
   - Plano de ação

4. AMEAÇAS (THREATS)
   Liste 10-15 ameaças externas:
   - Concorrência crescente
   - Novos entrantes
   - Produtos substitutos
   - Mudanças regulatórias
   - Crises econômicas
   - Mudanças tecnológicas
   - Mudanças de comportamento
   - Problemas de fornecimento
   - Questões políticas BR
   - Riscos de reputação

   Para cada ameaça:
   - Descrição da ameaça
   - Probabilidade de ocorrer
   - Impacto potencial
   - Sinais de alerta
   - Plano de contingência

5. ANÁLISE CRUZADA

   FORÇAS + OPORTUNIDADES (Estratégias Ofensivas)
   - Como usar forças para capturar oportunidades?
   - 5 estratégias principais
   - Priorização

   FORÇAS + AMEAÇAS (Estratégias Defensivas)
   - Como usar forças para mitigar ameaças?
   - 5 estratégias principais
   - Priorização

   FRAQUEZAS + OPORTUNIDADES (Estratégias de Reforço)
   - Como superar fraquezas para capturar oportunidades?
   - 5 estratégias principais
   - Investimentos necessários

   FRAQUEZAS + AMEAÇAS (Estratégias de Sobrevivência)
   - Como minimizar fraquezas e evitar ameaças?
   - 5 estratégias principais
   - Urgência

6. PRIORIZAÇÃO
   - Top 5 ações imediatas
   - Top 5 ações de médio prazo
   - Top 5 ações de longo prazo
   - Recursos necessários
   - Responsáveis

7. PLANO DE AÇÃO
   Para cada ação prioritária:
   - Objetivo específico
   - Passos detalhados
   - Timeline
   - Responsável
   - Recursos
   - Métricas de sucesso

8. MONITORAMENTO
   - KPIs para acompanhar
   - Frequência de revisão
   - Gatilhos de alerta
   - Ajustes necessários

Seja brutalmente honesto nas fraquezas e ameaças. Foque em insights acionáveis, não apenas listas. Considere particularidades do mercado brasileiro.`,
      tags: ["SWOT", "Análise", "Estratégia"]
    },
    {
      id: 28,
      title: "Plano de Lançamento de Produto",
      description: "Estruture um lançamento de produto de sucesso no Brasil",
      prompt: `Crie um plano completo de lançamento de produto para o mercado brasileiro:

Produto: [NOME]
Categoria: [TIPO]
Preço: R$ [VALOR]
Público: [AVATAR]
Data de lançamento: [DATA]
Prazo de preparação: [SEMANAS]

Desenvolva:

1. PRÉ-LANÇAMENTO (4-8 semanas antes)

   SEMANA -8 a -6: PREPARAÇÃO
   - Definição de posicionamento
   - Criação de materiais
   - Página de vendas
   - Sequências de e-mail
   - Conteúdo de redes sociais
   - Parcerias e afiliados
   - Lista de espera

   SEMANA -6 a -4: AQUECIMENTO
   - Teaser campaigns
   - Conteúdo educativo
   - Behind the scenes
   - Prova social antecipada
   - Construção de expectativa
   - Crescimento de lista

   SEMANA -4 a -2: INTENSIFICAÇÃO
   - Revelação gradual
   - Demonstrações
   - Depoimentos beta
   - Contagem regressiva
   - Bônus early bird
   - Webinar/live de pré-lançamento

   SEMANA -2 a -1: PRÉ-VENDA
   - Abertura de pré-venda (opcional)
   - Oferta especial
   - Escassez real
   - Últimos teasers
   - Preparação final

2. LANÇAMENTO (Semana 0)

   DIA 1: ABERTURA
   - Horário de abertura (considerar fuso BR)
   - E-mail de lançamento
   - Posts em todas as redes
   - Lives/webinar de lançamento
   - Ativação de afiliados
   - Tráfego pago intenso
   - Suporte em tempo real

   DIA 2-3: MOMENTUM
   - Prova social em tempo real
   - Depoimentos de primeiros clientes
   - Conteúdo de valor
   - Remarketing
   - Quebra de objeções
   - Histórias de sucesso

   DIA 4-5: MEIO DE LANÇAMENTO
   - Novo bônus/incentivo
   - Webinar de dúvidas
   - Casos de uso
   - Comparações
   - Testemunhos continuados

   DIA 6-7: FECHAMENTO
   - Última chance
   - Escassez real (carrinho fecha)
   - Urgência máxima
   - Bônus de última hora
   - Lives de encerramento
   - Contagem regressiva

3. PÓS-LANÇAMENTO (Semana +1 em diante)

   IMEDIATO:
   - Onboarding de clientes
   - Entrega de bônus
   - Suporte intensivo
   - Coleta de feedback
   - Resolução de problemas

   CURTO PRAZO (2-4 semanas):
   - Reabertura (se aplicável)
   - Carrinho abandonado
   - Lista de espera
   - Análise de resultados
   - Otimizações

   MÉDIO PRAZO (1-3 meses):
   - Evergreen (se aplicável)
   - Afiliados contínuos
   - Conteúdo orgânico
   - SEO
   - Comunidade

4. ESTRATÉGIAS POR CANAL

   E-MAIL MARKETING:
   - Sequência completa (15-20 emails)
   - Segmentação de lista
   - Horários otimizados BR
   - Testes A/B

   REDES SOCIAIS:
   - Calendário de conteúdo
   - Stories diários
   - Posts no feed
   - Reels/TikToks
   - Lives estratégicas

   TRÁFEGO PAGO:
   - Budget por canal
   - Criativos (5-10 variações)
   - Segmentação
   - Remarketing
   - Otimização diária

   AFILIADOS:
   - Materiais prontos
   - Comissões e bônus
   - Suporte dedicado
   - Ranking e gamificação

   PARCERIAS:
   - Co-marketing
   - Guest posts
   - Podcasts
   - Colaborações

5. MATERIAIS NECESSÁRIOS

   VENDAS:
   - Página de vendas (copy completa)
   - Vídeo de vendas (roteiro)
   - Checkout otimizado
   - Upsells/downsells
   - Garantia

   SUPORTE:
   - FAQ completo
   - Base de conhecimento
   - Scripts de atendimento
   - Chatbot

   MARKETING:
   - 50 posts para redes sociais
   - 20 e-mails
   - 10 anúncios
   - 5 vídeos
   - Banners e criativos

6. EQUIPE E RESPONSABILIDADES
   - Organograma de lançamento
   - Responsáveis por área
   - Plantões e escalas
   - Comunicação interna

7. ORÇAMENTO
   - Investimento total
   - Alocação por canal
   - Reserva de contingência
   - ROI esperado

8. MÉTRICAS E METAS
   - Meta de vendas (R$ e unidades)
   - Meta de leads
   - Taxa de conversão esperada
   - CAC máximo
   - LTV mínimo
   - Dashboard de acompanhamento

9. RISCOS E CONTINGÊNCIAS
   - Problemas técnicos
   - Baixa conversão
   - Alto CAC
   - Concorrência
   - Planos B

10. CRONOGRAMA DETALHADO
   - Gantt chart (descrição)
   - Marcos críticos
   - Dependências
   - Buffer de tempo

Seja detalhista, considere particularidades do consumidor brasileiro, foque em execução impecável.`,
      tags: ["Lançamento", "Produto", "Execução"]
    },
    {
      id: 29,
      title: "Estratégia de Retenção de Clientes",
      description: "Desenvolva um programa completo de retenção para o mercado brasileiro",
      prompt: `Crie uma estratégia completa de retenção de clientes para o Brasil:

Negócio: [NOME]
Tipo: [PRODUTO/SERVIÇO/SAAS]
Ticket médio: R$ [VALOR]
Churn atual: [%]
Meta de churn: [%]
LTV atual: R$ [VALOR]

Desenvolva:

1. DIAGNÓSTICO DE CHURN
   - Taxa de churn atual (mensal/anual)
   - Quando os clientes cancelam (timeline)
   - Por que cancelam (motivos principais)
   - Perfil de quem cancela
   - Sinais de alerta (early warning)
   - Custo do churn (R$)
   - Oportunidade de melhoria

2. ONBOARDING OTIMIZADO
   - Primeiras 24 horas
   - Primeira semana
   - Primeiro mês
   - Marcos de ativação
   - Momento "aha"
   - Redução de fricção
   - Educação progressiva
   - Quick wins garantidos
   - Comunicação proativa

3. ENGAJAMENTO CONTÍNUO
   - Comunicação regular (frequência)
   - Conteúdo de valor
   - Novidades e atualizações
   - Dicas de uso
   - Casos de sucesso
   - Comunidade
   - Eventos (webinars, workshops)
   - Gamificação

4. SUPORTE PROATIVO
   - Monitoramento de uso
   - Identificação de problemas
   - Alcance proativo
   - Suporte multicanal
   - Tempo de resposta
   - Qualidade de atendimento
   - Base de conhecimento
   - Chatbot + humano

5. PROGRAMA DE SUCESSO DO CLIENTE
   - Customer Success Manager
   - Check-ins regulares
   - Business reviews
   - Planejamento conjunto
   - Otimização de uso
   - Expansão de valor
   - Advocacy

6. PERSONALIZAÇÃO
   - Segmentação de clientes
   - Comunicação personalizada
   - Ofertas customizadas
   - Experiência adaptada
   - Uso de dados
   - Automação inteligente

7. PROGRAMA DE FIDELIDADE
   - Estrutura do programa
   - Pontos/recompensas
   - Tiers/níveis
   - Benefícios exclusivos
   - Gamificação
   - Reconhecimento
   - Incentivos de longo prazo

8. REATIVAÇÃO DE CHURN
   - Identificação de risco
   - Intervenção preventiva
   - Ofertas de retenção
   - Pesquisa de saída
   - Campanha de winback
   - Incentivos de retorno
   - Timing ideal

9. EXPANSÃO DE RECEITA
   - Upsell estratégico
   - Cross-sell relevante
   - Novos produtos/features
   - Aumento de uso
   - Contratos anuais
   - Add-ons
   - Timing de ofertas

10. COMUNIDADE E ADVOCACY
   - Construção de comunidade
   - Fórum/grupo
   - Eventos exclusivos
   - Programa de embaixadores
   - Referral program
   - UGC (conteúdo de usuários)
   - Casos de sucesso

11. FEEDBACK E MELHORIA
   - Coleta de feedback (NPS, CSAT)
   - Pesquisas regulares
   - Entrevistas qualitativas
   - Análise de dados
   - Implementação de melhorias
   - Comunicação de mudanças
   - Loop de feedback

12. TECNOLOGIA E AUTOMAÇÃO
   - CRM e ferramentas
   - Automações de retenção
   - Triggers comportamentais
   - Alertas de risco
   - Dashboards
   - Integrações
   - ROI de ferramentas

13. MÉTRICAS DE RETENÇÃO
   - Churn rate (mensal/anual)
   - Revenue churn
   - Cohort analysis
   - LTV
   - NPS
   - Engagement score
   - Time to value
   - Expansion revenue
   - Reactivation rate

14. PLANO DE AÇÃO 90 DIAS
   - Ações imediatas (quick wins)
   - Projetos de médio prazo
   - Iniciativas de longo prazo
   - Responsáveis
   - Recursos necessários
   - Timeline
   - Metas por fase

15. ORÇAMENTO
   - Investimento em retenção
   - Alocação por iniciativa
   - ROI esperado
   - Payback
   - Comparação com CAC

16. CULTURA DE RETENÇÃO
   - Mindset da empresa
   - KPIs de equipe
   - Incentivos
   - Treinamento
   - Processos
   - Accountability

Foque em ações práticas e mensuráveis, considere particularidades do cliente brasileiro (comunicação, suporte, pagamento).`,
      tags: ["Retenção", "Customer Success", "LTV"]
    },
    {
      id: 30,
      title: "Análise de Concorrência",
      description: "Conduza uma análise competitiva profunda do mercado brasileiro",
      prompt: `Realize uma análise completa de concorrência para o mercado brasileiro:

Seu negócio: [NOME]
Setor: [ÁREA]
Concorrentes: [LISTE 3-5 PRINCIPAIS]
Mercado: [DESCRIÇÃO]

Analise:

1. MAPEAMENTO COMPETITIVO

   Para cada concorrente principal:

   PERFIL GERAL:
   - Nome e posicionamento
   - Tempo de mercado
   - Tamanho (estimado)
   - Faturamento (estimado)
   - Número de clientes
   - Presença geográfica no Brasil
   - Estrutura (equipe, escritórios)

   PRODUTO/SERVIÇO:
   - Oferta principal
   - Diferenciais
   - Qualidade percebida
   - Inovação
   - Portfólio completo
   - Roadmap (se público)

   PRECIFICAÇÃO:
   - Preços praticados (R$)
   - Estrutura de preços
   - Formas de pagamento
   - Promoções frequentes
   - Posicionamento de preço
   - Valor percebido

   MARKETING:
   - Posicionamento de marca
   - Mensagem principal
   - Canais utilizados
   - Presença digital
   - Conteúdo produzido
   - Investimento em mídia (estimado)
   - Estratégia de SEO
   - Redes sociais (engajamento)

   VENDAS:
   - Processo de vendas
   - Canais de venda
   - Equipe de vendas
   - Conversão (estimada)
   - Ciclo de vendas
   - Objeções tratadas

   EXPERIÊNCIA DO CLIENTE:
   - Onboarding
   - Suporte
   - Comunidade
   - Reputação online
   - Reclamações (Reclame Aqui)
   - NPS (se público)

   TECNOLOGIA:
   - Stack tecnológico (visível)
   - Inovação
   - UX/UI
   - Performance
   - Integrações

2. ANÁLISE COMPARATIVA

   MATRIZ COMPETITIVA:
   - Você vs cada concorrente
   - Critérios de comparação (15-20)
   - Pontuação de 1-10
   - Visualização (descrição de tabela)
   - Gaps identificados

   FORÇAS E FRAQUEZAS:
   Para cada concorrente:
   - Top 5 forças
   - Top 5 fraquezas
   - Vulnerabilidades exploráveis
   - Ameaças que representam

3. POSICIONAMENTO DE MERCADO

   MAPA PERCEPTUAL:
   - Eixos relevantes (ex: preço vs qualidade)
   - Posicionamento de cada player
   - Gaps de mercado
   - Oportunidades de diferenciação
   - Seu posicionamento ideal

   SEGMENTAÇÃO:
   - Quem atende qual segmento
   - Sobreposição de público
   - Nichos não atendidos
   - Oportunidades de especialização

4. ESTRATÉGIAS COMPETITIVAS

   ESTRATÉGIA DE CADA CONCORRENTE:
   - Liderança em custo
   - Diferenciação
   - Foco/nicho
   - Híbrida
   - Efetividade da estratégia

   MOVIMENTOS RECENTES:
   - Lançamentos
   - Parcerias
   - Expansões
   - Mudanças de estratégia
   - Investimentos recebidos

5. SHARE OF VOICE

   PRESENÇA DIGITAL:
   - Tráfego web (estimado)
   - Ranking de palavras-chave
   - Autoridade de domínio
   - Backlinks
   - Menções em mídia
   - Seguidores em redes sociais
   - Engajamento

   SHARE OF MARKET:
   - Participação estimada (%)
   - Crescimento
   - Tendências

6. ANÁLISE SWOT COMPETITIVA

   Sua posição vs concorrência:
   - Suas vantagens competitivas
   - Suas desvantagens
   - Oportunidades de mercado
   - Ameaças competitivas

7. BARREIRAS COMPETITIVAS

   - Barreiras de entrada
   - Barreiras de saída
   - Poder de barganha (fornecedores)
   - Poder de barganha (clientes)
   - Ameaça de substitutos
   - Rivalidade do setor
   - Análise das 5 Forças de Porter

8. INTELIGÊNCIA COMPETITIVA

   FONTES DE INFORMAÇÃO:
   - Sites e blogs
   - Redes sociais
   - Avaliações de clientes
   - Vagas de emprego
   - Notícias e press releases
   - Relatórios financeiros (se público)
   - Eventos e feiras
   - Clientes em comum

   MONITORAMENTO CONTÍNUO:
   - O que monitorar
   - Ferramentas sugeridas
   - Frequência
   - Alertas
   - Relatórios

9. ESTRATÉGIAS DE DIFERENCIAÇÃO

   COMO SE DIFERENCIAR:
   - 10 oportunidades de diferenciação
   - Priorização
   - Viabilidade
   - Impacto esperado
   - Recursos necessários

   PROPOSTA DE VALOR ÚNICA:
   - Seu diferencial claro
   - Por que escolher você
   - Comunicação da diferença

10. ESTRATÉGIAS COMPETITIVAS

   OFENSIVAS:
   - Como atacar concorrentes
   - Onde são vulneráveis
   - Táticas específicas

   DEFENSIVAS:
   - Como se proteger
   - Fortalecimento de posição
   - Retenção de clientes

   FLANQUEAMENTO:
   - Nichos não atendidos
   - Novos mercados
   - Inovação disruptiva

11. CENÁRIOS FUTUROS

   - Melhor cenário
   - Cenário mais provável
   - Pior cenário
   - Preparação para cada

12. PLANO DE AÇÃO

   IMEDIATO (30 dias):
   - 5 ações prioritárias
   - Quick wins competitivos

   CURTO PRAZO (90 dias):
   - Projetos de diferenciação
   - Melhorias necessárias

   MÉDIO/LONGO PRAZO:
   - Investimentos estratégicos
   - Mudanças estruturais

13. MÉTRICAS DE ACOMPANHAMENTO

   - KPIs competitivos
   - Benchmarks
   - Frequência de análise
   - Dashboards

Seja detalhista e use dados reais quando possível. Foque em insights acionáveis, não apenas descrições. Considere particularidades do mercado brasileiro.`,
      tags: ["Concorrência", "Análise", "Inteligência de Mercado"]
    }
  ]
};

export default function BibliotecaPromptsPage() {
  const [selectedCategory, setSelectedCategory] = useState<"marketing" | "conteudo" | "negocios">("marketing");
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentPrompts = prompts[selectedCategory];

  const filteredPrompts = currentPrompts.filter(prompt =>
    prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prompt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prompt.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Biblioteca de Prompts IA Brasil
                </h1>
                <p className="text-sm text-gray-600 hidden sm:block">30 prompts profissionais para ChatGPT e Claude</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categorias - Desktop */}
        <div className="hidden lg:flex gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory("marketing")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              selectedCategory === "marketing"
                ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            Marketing Digital (10)
          </button>
          <button
            onClick={() => setSelectedCategory("conteudo")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              selectedCategory === "conteudo"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            <FileText className="w-5 h-5" />
            Criação de Conteúdo (10)
          </button>
          <button
            onClick={() => setSelectedCategory("negocios")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              selectedCategory === "negocios"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            <Briefcase className="w-5 h-5" />
            Negócios Digitais (10)
          </button>
        </div>

        {/* Categorias - Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden flex flex-col gap-3 mb-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
            <button
              onClick={() => {
                setSelectedCategory("marketing");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === "marketing"
                  ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              Marketing Digital (10)
            </button>
            <button
              onClick={() => {
                setSelectedCategory("conteudo");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === "conteudo"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <FileText className="w-5 h-5" />
              Criação de Conteúdo (10)
            </button>
            <button
              onClick={() => {
                setSelectedCategory("negocios");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === "negocios"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Briefcase className="w-5 h-5" />
              Negócios Digitais (10)
            </button>
          </div>
        )}

        {/* Busca */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar prompts por título, descrição ou tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-700 bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Grid de Prompts */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredPrompts.map((prompt) => (
            <div
              key={prompt.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{prompt.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{prompt.description}</p>
                  </div>
                  <BookOpen className="w-6 h-6 text-blue-500 flex-shrink-0 ml-3" />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {prompt.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => toggleExpand(prompt.id)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-lg transition-all text-gray-700 font-medium mb-3"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    {expandedId === prompt.id ? "Ocultar Prompt" : "Ver Prompt Completo"}
                  </span>
                  {expandedId === prompt.id ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>

                {expandedId === prompt.id && (
                  <div className="mb-4 p-4 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl border-2 border-gray-200 max-h-96 overflow-y-auto">
                    <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">
                      {prompt.prompt}
                    </pre>
                  </div>
                )}

                <button
                  onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-xl ${
                    copiedId === prompt.id
                      ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
                  }`}
                >
                  {copiedId === prompt.id ? (
                    <>
                      <Check className="w-5 h-5" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      Copiar Prompt
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPrompts.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto border border-gray-200">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum prompt encontrado</h3>
              <p className="text-gray-600">Tente buscar com outros termos ou explore as categorias</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pronto para Transformar seu Negócio com IA?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Acesse todos os 30 prompts profissionais + templates Notion + materiais bônus
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl hover:scale-105">
            Garantir Minha Biblioteca Completa
          </button>
        </div>
      </div>
    </div>
  );
}