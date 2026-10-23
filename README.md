# Lumino — demonstração personalizada

Link: https://lumino-voragon.vercel.app

## Entrega

- Página navegável em HTML, CSS e JavaScript, responsiva.
- Vídeo de 43 segundos sem áudio: apresentacao-lumino.mp4.
- Roteiro sincronizado: ROTEIRO_NARRACAO.md.
- PDF da página: apresentacao-lumino.pdf.
- Capturas completas de desktop e celular.

## Funcionalidade atual

Jornada de escolha de interesse → preferência de período → conferência da mensagem → WhatsApp com contexto. Links por assunto preservam o interesse desde um conteúdo do Instagram. Sem diagnóstico, indicação automática ou promessa de resultado. Não há agenda integrada: disponibilidade é confirmada pela clínica. Nenhum formulário é armazenado, e o WhatsApp só abre mediante ação explícita. O botão leva ao número real informado na página oficial; a mensagem identifica a demonstração.

## Fontes

Conferência em 25/09/2026:
- https://gur.luminoclinica.com.br/ — acesso ao HTML original; três contatos: WhatsApp, mapa e Instagram. Origem do símbolo, foto do ambiente, telefone e link de localização.
- https://www.instagram.com/luminoclinica_gurupi/ — captura fornecida por Jefferson e evidências locais anteriores da prospecção. Acesso web direto ao Instagram bloqueado nesta sessão. Não se pressupõe atualização dos registros anteriores.
- Publicação de 15/09/2026 sobre lipo de papada: evidência no registro local de posts da Lumino. Utilizada apenas para escolher o tema, sem reutilizar imagens de pacientes ou afirmações clínicas.
- Referências de entrega: demonstrações Blend Wine e Corpo Culto.

Marca escrita recomposta tipograficamente junto ao símbolo oficial; texto e disposição são uma proposta. Conteúdo, lista de serviços, registros profissionais e condições de atendimento devem ser validados pela clínica antes de transformar a amostra em página oficial. Não foram inventados depoimentos, preços, credenciais, horários de funcionamento ou resultados clínicos.

## Validação

Página pública HTTP 200. Testes reais de navegador Chrome: escolha dos interesses, nome opcional, preferência, montagem e codificação do WhatsApp, modal e Escape, opção de orientação, FAQ e link por interesse. Sem erros de JavaScript. Larguras 360, 390, 768 e 1440 sem transbordamento horizontal. Fluxo mobile concluído até prévia; nenhum envio externo executado.

## Hospedagem

Projeto independente lumino-voragon no Vercel, sem alterar projetos anteriores. Arquivos internos, credenciais e materiais de apresentação excluídos do deploy. Página marcada noindex. Não contém histórico de prospecção nem dados comerciais privados.

## Execução local

python3 -m http.server 8772 --bind 127.0.0.1

Abrir http://127.0.0.1:8772. Também é possível abrir index.html diretamente, com internet para carregar as fontes.

## Direção comercial revisada em 25/09/2026

Preferência explícita de Jefferson: não usar flechas em botões ou links. Manter nos próximos ajustes.

O diferencial a oferecer é a integração com agenda e automação do agendamento: consultar disponibilidade, reservar sem duplicidade e automatizar confirmações, lembretes e caminhos de remarcação. Esta integração NÃO está implementada no site atual. Avaliar a agenda utilizada pela clínica, acesso à API, quantidade de profissionais e canal de mensagens antes de fechar o escopo. Não criar uma agenda paralela sem sincronização com o sistema utilizado.

O site atual é a primeira etapa comercial. A integração deve ser apresentada explicitamente como evolução, com orçamento separado. Não incluir preços ou proposta comercial na página destinada aos pacientes.
