import React from 'react';
import Link from 'next/link';
import AppBar from '../../components/AppBar';
import FooterBar from '../../components/FooterBar';
import { Center, Container, TextContainer, Title, Description, Button, Row, Divider } from '../../styles/styleTermos';

export default function TermosDeUsoNavegacao() {

    return (
        <div>
            <AppBar />
            <Center>
                <Container>
                    <Row>
                        <Title marginLeft={30} size={30} lineHeight={40} color={'rgba(68, 68, 68, 0.8)'} marginBottom={30}>Termos de Uso e Navegação</Title>

                        <Link href="/termos">
                            <Button width={196} marginBottom={20} height={40} color={'#F2F2F2'} borderColor={'#F2F2F2'} colorHover={'#e6e6e6'}>
                                <Description size={16} lineHeight={21} color={'rgba(68, 68, 68, 0.8)'} marginBottom={1}>
                                    Voltar
                            </Description>
                            </Button>
                        </Link>
                    </Row>

                    <TextContainer paddingRight={30} paddingLeft={30}>
                        <Description>
                            Bem-vindo ao Portal <b>KICKANTE</b>. A seguir apresentamos a você (“Visitante”) os Termos de Uso e Condições de Navegação (“Termos”), documento que relaciona as principais regras que devem ser observadas por todos que acessam o site <a href="https://www.kickante.com.br" target="blank">www.kickante.com.br</a>, <a href="https://www.kickante.com" target="blank">www.kickante.com</a>, seus subdomínios ou utilizam suas ferramentas.
                        </Description>

                        <Description>
                            Ao visitar ou utilizar este site pressupõe-se a leitura e concordância com todos os itens abaixo.
                        </Description>

                        <Description>
                            A <b>KICKANTE</b> é um Portal que intermedia o levantamento de fundos (“Contribuições”) para projetos e desenvolvimento de novos produtos de forma colaborativa, comumente conhecido como crowdfunding, em inglês.
                        Para os fins deste documento, devem se considerar as seguintes definições e descrições para seu melhor entendimento:
                        </Description>

                        <Description>
                            <b>Anti-Spam:</b> Sistema que evita correspondências não desejadas, como publicidade em massa, pelo bloqueio de mensagens ou as movendo para pasta específica.
                        </Description>

                        <Description>
                            <b>Aplicativo Spider:</b> Programa desenvolvido para obter informações de modo automatizado na internet, navegando pela web (teia) como se fosse uma spider (aranha).
                        </Description>

                        <Description>
                            <b>Arranjadores de pagamento:</b> Assim definidos por lei, prestadores de determinado serviço de pagamento ao público aceito por mais de um recebedor, mediante acesso direto pelos usuários finais, pagadores e recebedores. Ex.: (Wirecard, PayPal).
                        </Description>

                        <Description>
                            <b>Campanha:</b> evento para arrecadação de Contribuições no Portal KICKANTE, com detalhes específicos para a destinação pretendida pelo seu Elaborador e por prazo determinado de duração, que pode ter, ou não, uma recompensa ao Colaborador.
                        </Description>

                        <Description>
                            <b>Colaborador:</b> usuário cadastrado que envia Contribuições à campanha, sob sua exclusiva responsabilidade.
                        </Description>

                        <Description>
                            <b>Conta de Acesso:</b> Credencial de um visitante cadastrado que permite o acesso à área restrita e às funcionalidades exclusivas, que é definida pelo nome de usuário e senha.
                        </Description>

                        <Description>
                            <b>KSI:</b> Denominação utilizada nestes Termos para identificar a detentora e proprietária deste site, Kickante Serviços de Informação e Hospedagem na Internet Ltda., pessoa jurídica de direito privado, com sede na cidade de São Paulo, Estado de São Paulo, à Rua Doutor Guilherme Bannitz 126, Conj. 81 – Itaim Bibi – São Paulo/SP e inscrita sob o CNPJ 18.182.141/0001-38.
                        </Description>

                        <Description>
                            <b>Elaborador de Campanhas:</b> usuário cadastrado que desenvolve e apresenta uma Campanha, sob sua exclusiva responsabilidade, para captação de contribuições para o desenvolvimento de seu projeto ou produto.
                        </Description>

                        <Description>
                            <b>Layout:</b> Conjunto compreendido entre aparência, design e fluxos do Portal.
                        </Description>

                        <Description>
                            <b>Link:</b> Terminologia para endereço de internet.
                        </Description>

                        <Description>
                            <b>Logs:</b> Registros de atividades do visitante efetuadas no Portal.
                        </Description>

                        <Description>
                            <b>Portal KICKANTE:</b> Designa o site de internet hospedado em <a href="https://www.kickante.com.br" target="blank">www.kickante.com.br</a> e <a href="https://www.kickante.com" target="blank">www.kickante.com</a> e seus subdomínios.
                        </Description>

                        <Description>
                            <b>Recompensas:</b> produtos ou serviços que serão oferecidos pelo usuário Elaborador de Campanhas aos usuários Colaboradores, sob sua exclusiva responsabilidade e sem relação com a KSI.
                        </Description>

                        <Description>
                            <b>Site:</b> Denominação para páginas de internet.
                        </Description>

                        <Description>
                            <b>Visitante:</b> Qualquer pessoa que navegar pelo Portal.
                        </Description>

                        <Description>
                            <b>Usuário:</b> Todo visitante cadastrado no Portal.
                        </Description>

                        <Description>
                            <b>Webmastering:</b> Compreende a criação, programação, desenvolvimento, controle e disponibilidade de páginas de internet.
                        </Description>

                        <Divider marginTop={30} marginBottom={40} />

                        {/* 1 – Acesso e Restrições de funcionalidade */}

                        <Description>
                            <b>1 – Acesso e Restrições de funcionalidade</b>
                        </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        1.1. Este Portal é dedicado à hospedagem do site de internet <b>KICKANTE</b>, cuja atividade é intermediar a arrecadação de fundos para desenvolvimento de novos produtos ou projetos, conhecido como crowdfunding.
                        </Description>
                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            1.2. Não é permitido aos visitantes e usuários acessarem as áreas de programação de Portal, seu banco de dados ou qualquer outro conjunto de informações que faça parte da atividade de Webmastering, ficando sujeito quem o fizer à legislação penal brasileira e obrigados a reparar os danos que causarem.
                    </Description>
                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            1.3. Também não é autorizado realizar ou permitir engenharia reversa, nem traduzir, decompilar, copiar, modificar, reproduzir, alugar, sublicenciar, publicar, divulgar, transmitir, emprestar, distribuir ou, de outra maneira, dispor das ferramentas de consulta deste Portal e de suas funcionalidades.
                    </Description>
                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            1.4. Neste Portal é proibida a utilização de aplicativos spider, ou de mineração de dados, de qualquer tipo ou espécie, além de outro aqui não tipificado, mas que atue de modo automatizado, tanto para realizar operações massificadas ou para quaisquer outras finalidades, sob aplicação da legislação penal brasileira e de reparar os danos que decorrerem desta utilização.
                    </Description>
                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                        1.4.1. Este Portal foi desenvolvido para a utilização por seres humanos da plataforma <b>KICKANTE</b> com a finalidade de intermediar a arrecadação de recursos pelos Elaboradores, com a finalidade de desenvolver novos projetos ou produtos, de forma colaborativa, sendo proibidos quaisquer outros usos que não sejam estes.
                    </Description>
                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            1.5. É ônus dos visitantes e usuários arcar com os meios necessários para navegar neste Portal, incluindo os requisitos para o acesso à Internet.
                    </Description>

                        <Divider marginTop={30} marginBottom={40} />

                        {/* 2 – Informações gerais sobre o site e seu funcionamento */}

                        <Description>
                            <b>2 – Informações gerais sobre o site e seu funcionamento</b>
                        </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        2.1. Este Portal é apresentado ao público da web na maneira como está disponível, podendo passar por constantes aprimoramentos e atualizações, não ficando obrigada a <b>KSI</b> a manter uma estrutura ou layout, se não por sua própria conveniência.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        2.2. A <b>KSI</b> envida seus esforços para a disponibilidade contínua e permanente do Portal, ficando o acesso sujeito, todavia, a eventos extraordinários, como desastres naturais, falhas ou colapsos nos sistemas centrais de comunicação e acesso à internet ou fatos de terceiro, que fogem de sua esfera de vigilância e responsabilidade.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        2.3. A <b>KSI</b> não se responsabiliza por qualquer dano, prejuízo ou perda no equipamento dos visitantes e usuários causados por falhas no sistema, no servidor ou na conexão à Internet, ainda que decorrentes de condutas de terceiros, inclusive por ações de softwares maliciosos como vírus, cavalos de tróia, e outros que possam, de algum modo, danificar o equipamento ou a conexão dos visitantes e usuários em decorrência do acesso, utilização ou navegação neste Portal, bem como a transferência de dados, arquivos, imagens, textos, áudios ou vídeos contidos no mesmo.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            2.4. Os visitantes e usuários não possuem qualquer direito para exigir a disponibilidade do Portal conforme melhor lhes convier, tampouco poderão pleitear indenização ou reparação de danos em caso deste Portal permanecer fora do ar, independente da motivação.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        2.5. A KSI não detém qualquer responsabilidade pela navegação dos visitantes e usuários nos links externos contidos no Portal, sendo o dever deles a leitura dos Termos de Uso e Política de Privacidade do site acessado e agir conforme o determinado. Também serão os principais responsáveis caso sobrevier algum dano ou prejuízo, uma vez que a navegação segura cabe aos mesmos e que o Portal <b>KICKANTE</b> apenas apontou o link cabendo ao interessado a visita, ou não, ao site.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                            2.5.1. A KSI não verifica, controla, aprova ou garante a adequação ou exatidão das informações ou dados disponibilizados em tais links, não sendo, portanto, responsável por prejuízos, perdas ou danos ocorridos pela visita de tais sites, cabendo ao usuário verificar a confiabilidade das informações e dados ali exibidos antes de utilizá-los.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                        2.5.2. Perdas, danos ou prejuízos ocasionados por atrasos, defeitos, erros ou omissões que possam existir nos sistemas ou serviços disponibilizados pelos sites referidos acima, não são de responsabilidade da <b>KSI</b>, mas sim de seu respectivo controlador.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        2.6. A <b>KSI</b> não se responsabiliza pelos atos praticados por visitantes e usuários em seu Portal, devendo cada um ser imputado de acordo com a qualidade do uso da plataforma.
                    </Description>

                        <Divider marginTop={30} marginBottom={40} />

                        {/* 3 – Comunicação do Portal com seus visitantes e usuários */}

                        <Description>
                            <b>3 – Comunicação do Portal com seus visitantes e usuários</b>
                        </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        3.1. A <b>KSI</b> poderá utilizar todos os canais de comunicação fornecidos e autorizados com seus visitantes e usuários, nas suas mais diversas modalidades, seja e-mail, ligação telefônica ou envio por SMS, dentre outros.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                            3.1.1. A responsabilidade pelo recebimento dos comunicados é exclusiva dos visitantes e usuários, por isso é indispensável que sempre forneçam os dados corretos e precisos, além de os manterem atualizados.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                        3.1.2. É igualmente de suas alçadas deixarem seus sistemas de anti-spam configurados de modo que não interfiram no recebimento dos comunicados e materiais do Portal <b>KICKANTE</b>, não sendo aceitável nenhuma escusa caso não tenha tido acesso a algum e-mail em virtude desse bloqueio ou filtro similar.
                    </Description>

                        <Divider marginTop={30} marginBottom={40} />

                        {/* 4 – Privacidade dos visitantes e usuários no Portal */}

                        <Description>
                            <b>4 – Privacidade dos visitantes e usuários no Portal</b>
                        </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            4.1. O Portal possui documento próprio, denominado Política de Privacidade, que regula o tratamento dado às informações de cadastro e demais informações e dados coletados.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            4.2. A Política de Privacidade é parte integrante e inseparável dos presentes Termos, e pode ser acessada no link encontrado em seu rodapé.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            4.3. Caso alguma disposição da Política de Privacidade conflitar com qualquer outra do presente documento, deverá prevalecer o descrito na norma mais específica.
                    </Description>

                        <Divider marginTop={30} marginBottom={40} />

                        {/* 5 – Obrigações do Portal */}

                        <Description>
                            <b>5 – Obrigações do Portal</b>
                        </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        5.1. A <b>KSI</b> se obriga com os visitantes e usuários e seus usuários a:
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                            5.1.1. Manter o ambiente virtual seguro, tal qual suas operações de gerenciamento e dados registrados para tanto, salvo por ato destrutivo de terceiro que vá além dos esforços empenhados e do estado atual da tecnologia, hipótese que não se responsabilizará por danos oriundos dessa prática danosa.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                            5.1.2. Preservar a funcionalidade do site, com links não quebrados, utilizando layout que respeita a usabilidade, segurança e navegabilidade, facilitando a navegação sempre que possível e garantindo um ambiente confiável para processar suas operações.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                            5.1.3. Exibir as funcionalidades de maneira clara, completa, precisa e suficiente de modo que exista a exata percepção das operações realizadas.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                            5.1.4. Garantir, por meio do estado da técnica disponível, o sigilo e confidencialidade dos dados inseridos nas funcionalidades oferecidas em seu Portal, somente sendo acessíveis a quem o usuário declinar, além de si próprio.
                    </Description>

                        <Divider marginTop={30} marginBottom={40} />

                        {/* 6 – Obrigações do visitante */}

                        <Description>
                            <b>6 – Obrigações do visitante</b>
                        </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            6.1. Os visitantes e usuários se obrigam a realizar uma navegação com retidão ética, sempre respeitando as condições que regem a utilização do Portal, incluindo mas não se limitando aos Termos.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            6.2. Ao fornecer dados e informações os visitantes e usuários se obrigam a fazê-lo sempre com compromisso de veracidade e autenticidade, sob pena da aplicação das penas da lei, de indenizar a quem causar dano e de ter a conta de acesso do presente Portal excluída.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        6.3. Na incidência de danos ao Portal ou a terceiros, o responsável se compromete a arcar com todas as obrigações de indenizar o sujeito lesado, não devendo a <b>KSI</b> responder por tais prejuízos.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            6.4. Os visitantes e usuários devem utilizar os recursos do presente Portal para as finalidades que foi constituído, sob pena da aplicação das penas da lei, de indenizarem a quem causarem dano e de terem a conta de acesso do presente Portal excluída.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            6.5. Também, visitantes e usuários devem manter o sigilo dos dados de sua conta de acesso, sua senha e demais dispositivos de autenticação em relação a terceiros, não os divulgando ou compartilhando com quem quer que seja, sob pena da exclusão da conta e de ter de ressarcir os danos que sobrevierem dessa divulgação indevida.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                            6.5.1. Caso o usuário suspeite que a confidencialidade de sua senha foi quebrada ou que houve o comprometimento de algum dispositivo de autenticação, este deverá proceder sua troca ou atualização o mais rápido possível. Se não conseguir acessar a Internet para obter suporte, deverá buscar atendimento dentre os canais disponíveis.
                    </Description>

                        <Divider marginTop={30} marginBottom={40} />

                        {/* 7 - Direitos autorais e propriedade intelectual de Portal */}

                        <Description>
                            <b>7 - Direitos autorais e propriedade intelectual de Portal</b>
                        </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        7.1. O uso comercial da expressão <b>KICKANTE</b> como marca, nome empresarial ou nome de domínio, além dos conteúdos das telas de Portal, assim como os programas, bancos de dados, redes e seus arquivos são de propriedade da <b>KSI</b> e estão protegidos pelas leis e tratados internacionais de direito autoral, marcas, patentes, modelos e desenhos industriais.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        7.2. Ao acessar este Portal, os visitantes e usuários declaram que irão respeitar todos os direitos de propriedade intelectual e os decorrentes da proteção de marcas, patentes e/ou desenhos industriais, depositados ou registrados em nome da <b>KSI</b>, bem como de todos os direitos referentes a terceiros que porventura estejam, ou estiveram, de alguma forma, disponíveis no Portal. O simples acesso ao Portal não confere a estes qualquer direito ao uso dos nomes, títulos, palavras, frases, marcas, patentes, obras literárias, artísticas, lítero-musicais, imagens, dados e informações, dentre outras, que nele estejam ou estiveram disponíveis.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        7.3. A reprodução dos conteúdos descritos anteriormente está proibida, salvo com prévia autorização por escrito da <b>KSI</b> ou caso se destinem ao uso exclusivamente pessoal e sem que em nenhuma circunstância os visitantes e usuários adquiram qualquer direito sobre os mesmos.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        7.4. É permitido fazer somente o arquivo temporário deste Portal e de seu conteúdo, sendo vedada sua utilização para finalidades comerciais, publicitárias ou qualquer outra que contrarie a realidade para o qual foi concebido, conforme definido neste documento. Restam igualmente proibidas a reprodução, distribuição e divulgação, total ou parcial, dos textos, figuras, gráficos que compõem o presente Portal, sem prévia e expressa autorização da <b>KSI</b>, sendo permitida somente a impressão de cópias para uso e arquivo pessoal, sem que sejam separadas as partes que permitam dar o fiel e real entendimento de seu conteúdo e objetivo.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            7.5. Os visitantes e usuários assumem toda e qualquer responsabilidade, de caráter civil e/ou criminal, pela utilização indevida das informações, textos, gráficos, marcas, obras, imagens, enfim, de todo e qualquer direito de propriedade intelectual ou industrial deste Portal.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        7.6. Qualquer outro tipo de utilização de material autorizado, inclusive para fins editoriais, comerciais ou publicitários, só poderá ser feito mediante prévio e expresso consentimento da <b>KSI</b>.  Os visitantes e usuários estão cientes, através deste item, que o uso comercial não autorizado poderá incorrer em infrações cíveis e criminais, por estar infringindo a lei dos direitos autorais.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        7.7. Qualquer reutilização do material autorizado deverá ser objeto de uma nova autorização da <b>KSI</b>.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            7.8. A autorização para utilização do material solicitado não poderá ser transferida a terceiros, mesmo que vinculados ao sujeito autorizado por alguma razão.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            7.9. Qualquer utilização não contemplada na mencionada autorização será considerada como uma violação dos direitos de autor e sujeita às sanções cabíveis na Lei 9.610, de 19 de fevereiro de 1998, que protege os direitos autorais no Brasil.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        7.10. A utilização das funcionalidades oferecidas se dará na forma de prestação de serviço, não conferindo ao usuário nenhum direito sobre o software utilizado pela <b>KSI</b> ou de suas estruturas de informática que sustentam as aplicações de internet.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        7.11. A eventual retirada de qualquer conteúdo ou funcionalidade deste Portal, em decorrência de alguma reclamação, deverá ser sempre compreendida como uma demonstração de nossa intenção de evitar dissabores e, jamais, como reconhecimento de culpa ou de qualquer infração pela <b>KSI</b> a direito de terceiro.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        7.12. Salvo disposição específica em contrato existente entre os visitantes e usuários com a <b>KSI</b>, esses retêm os direitos autorais dos conteúdos que já possuírem quando os enviam ao Portal, tais como, mas não limitadamente, a comentários, vídeos, imagens, áudio e mensagens, contudo, concedem uma licença irrevogável, perpétua, mundial, irrestrita, isenta de royalties e não exclusiva de reprodução, adaptação, modificação, tradução, publicação, distribuição ou exibição no próprio Portal, possibilitando a melhor utilização da ferramenta, maior divulgação de algum produto, serviço ou atividade ligada ao Portal <b>KICKANTE</b>.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        7.13. Caso o visitante ou usuário enviar sugestões para a <b>KSI</b> por meio do Portal <b>KICKANTE</b> ou pelos canais divulgados que diga respeito a ideias para novos produtos <b>KICKANTE</b>, melhorias nos seus produtos já existentes, campanhas publicitárias ou qualquer outra ação de marketing a ser realizada pela <b>KICKANTE</b>, elas deixarão de pertencer ao patrimônio imaterial do visitante ou do usuário, ingressando no da <b>KSI</b>, nada podendo reclamar neste sentido, sobretudo recompensa pecuniária pelo que foi enviado ou revisão nos modelos usados.
                    </Description>

                        <Divider marginTop={30} marginBottom={40} />

                        {/* 8 – Das funcionalidades do Portal KICKANTE */}

                        <Description>
                            <b>8 – Das funcionalidades do Portal KICKANTE</b>
                        </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            8.1. O Portal apresenta a seus visitantes e usuários uma plataforma que viabiliza aos Elaboradores a apresentação de suas Campanhas aos potenciais Colaboradores. Caso os Colaboradores se identifiquem com o projeto apresentado, ou com o produto oferecido, eles poderão contribuir financeiramente, possibilitando que o Elaborador viabilize seu projeto. A Kickante é um mero intermediário, atuando na apresentação da Campanha e recebendo os recursos dos Colaboradores, por conta e ordem dos Elaboradores, não tendo qualquer responsabilidade pela Campanha, produtos ou projetos apresentados pelos Elaboradores.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                            8.1.1. Somente é permitido aos usuários maiores de 18 anos utilizarem a plataforma.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                            8.1.2. Em caso de cadastro de pessoa jurídica, deverá ser indicada pessoa física responsável pela conta, que deve atender aos critérios de idade acima.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                            8.1.3. Como a Kickante é um mero intermediário na arrecadação dos recursos, esta não é responsável pelo sucesso da Campanha, pela veracidade das informações apresentadas pelos Elaboradores, tampouco garante a entrega das recompensas ou a viabilidade do projeto apresentado pelos Elaboradores.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                        8.1.4. Se uma Campanha não for bem sucedida, ou, de alguma forma um usuário se viu frustrado em virtude de informação inverídica de outro veiculada no Portal <b>KICKANTE</b>, a <b>KSI</b> não será responsável pelas frustrações e dissabores decorrentes desses fatos, pois não atua de forma alguma no desenvolvimento da Campanha ou se responsabiliza pelas contribuições dos Colaboradores, sendo meramente um intermediário que apresenta as Campanhas e coleta as Contribuições por conta e ordem do Elaborador.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            8.2. O Portal apenas intermedia as Contribuições dos usuários Colaboradores, com a posterior disponibilização dos valores para o usuário Elaborador uma vez atingida ou superada a meta estabelecida na Campanha.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                            8.2.1. As contribuições são enviadas a título de doação do Colaborador ao Elaborador. Quando houver indicação de recompensa pelo Elaborador, este é o único responsável pela sua confecção e entrega ao Colaborador. Caso o Elaborador não cumpra com os prazos prometidos ou com a entrega das recompensas, o Colaborador poderá se utilizar de todos os meios legais frente ao Elaborador para fazer valer seus direitos e ter suas pretensões atingidas. A Kickante não se responsabiliza pela entrega das recompensas, tampouco por quaisquer custos incorridos pelo Colaborador caso este pretenda se valer de meios legais para ter suas pretensões atendidas junto ao Elaborador.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                        8.2.2. As campanhas poderão beneficiar terceiros que não o próprio elaborador, ficando a cargo deste repassar o que foi arrecadado ou o resultado da campanha. Caso o beneficiário se recusar a receber o que foi oferecido, os colaboradores não terão qualquer direito sobre o que foi enviado à <b>KICKANTE</b>, permanecendo o elaborador como o legítimo detentor.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                        8.2.3. Em caso de descumprimento pelo Usuário Elaborador de quaisquer das disposições da campanha criada, a <b>KSI</b> não será responsável por realizar o que não foi cumprido, especialmente, mas não se limitando a entregar determinado produto ou realizar o serviço prometido. O Usuário Colaborador deverá buscar a satisfação do que foi dado em compromisso pelas vias legais, sem qualquer interferência, responsabilidade ou intermediação da Kickante.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        8.3. A <b>KSI</b> poderá alterar os critérios de elegibilidade a qualquer momento. Também, possui a faculdade de se recusar a conceder conta de acesso a qualquer pessoa ou entidade que tiver descumprido os Termos ou documento legal do Portal <b>KICKANTE</b> e teve sua conta de acesso excluída por esta razão.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            8.4. Ao contribuírem com as campanhas existentes os usuários colaboradores não adquirem qualquer direito à propriedade intelectual dos conteúdos enviados pelos usuários elaboradores, tampouco do produto ou serviço que será produzido ou desenvolvido.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        8.5. O usuário está ciente que deverá possuir cadastro em um dos arranjadores de pagamento que o <b>KICKANTE</b> aceita em sua plataforma. Assim, deverá ler atentamente aos Termos de Serviço respectivos para que eleja qual utilizará.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                            8.5.1. Também, está de acordo que ao utilizar essas plataformas poderá haver aplicação de tarifas sobre o montante arrecadado, cujo pagamento está vinculado exclusivamente à movimentação de capital no arranjador escolhido.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            8.6. Se o usuário elaborador oferecer mais de uma espécie de recompensa, poderá o usuário colaborador escolher a que melhor lhe agrada no momento da contribuição, desde que atenda ao valor mínimo necessário.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        8.7. A <b>KSI</b> se reserva no direito de não publicar ou excluir campanhas e conteúdos enviados pelos usuários, a qualquer tempo, sem prévio aviso e nenhum direito a indenização a quem quer que seja, que contiverem:
                    </Description>

                        <ul style={{ marginLeft: 60 }}>
                            <li><Description marginBottom={5}>• Racismo ou discriminação de qualquer natureza;</Description></li>
                            <li><Description marginBottom={5}>• Bullying, Stalking ou qualquer outra espécie de constrangimento ilegal ou assédio;</Description></li>
                            <li><Description marginBottom={5}>• Manifesta violação a direito autoral ou direito de imagem;</Description></li>
                            <li><Description marginBottom={5}>• Utilização de marcas, símbolos, logotipos ou emblemas de terceiros;</Description></li>
                            <li><Description marginBottom={5}>• Instigação ou apologia à prática de crimes, como tráfico ou uso de entorpecentes, estupro, homicídio, estelionato, dentre outros;</Description></li>
                            <li><Description marginBottom={5}>• Manifesta prática de ato contrário à lei, à ordem pública ou aos bons costumes;</Description></li>
                            <li><Description marginBottom={5}>• Uso da violência, disseminação de ódio ou qualquer outra forma de agressão ao bem-estar físico de alguém;</Description></li>
                            <li><Description marginBottom={5}>• Atividade comercial similar ao <b>KICKANTE</b> ou que utilize a plataforma para angariar recursos por publicidade de terceiros ao invés de praticar a interação regular do ambiente;</Description></li>
                            <li><Description marginBottom={20}>• Erros ou suspeita de equívocos.</Description></li>
                        </ul>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            8.8. Os visitantes poderão se valer do canal de ‘Fale Conosco’ toda vez que presenciarem ou verificarem conteúdo impróprio no site.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                            8.8.1. A denúncia será sigilosa e preservará a identidade do visitante.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        8.9. Os conteúdos enviados pelos usuários e publicados no Portal <b>KICKANTE</b> não deverão ser interpretados como opinião da <b>KSI</b>, tampouco declaração de concordância com o que foi publicado. Os usuários são inteiramente responsáveis pelos conteúdos que submeterem ao Portal.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        8.10. Os usuários autorizam a <b>KSI</b> a divulgar amplamente as campanhas em execução e aqueles que promoveram as colaborações nos mais diversos meios de comunicação e mídias, de modo a estimular maior participação nas atividades por outras pessoas e aumentar a chance de sucesso da campanha, sem a exigência de remuneração ou contraprestação qualquer resultante dessa disseminação.
                    </Description>

                        <Divider marginTop={30} marginBottom={40} />

                        {/* 9 – Das modalidades de Campanha e Pagamentos */}

                        <Description>
                            <b>9 – Das modalidades de Campanha e Pagamentos</b>
                        </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            9.1. “Tudo ou Nada”: A campanha “Tudo ou Nada” é definida por período de 1 a 60 dias em que o usuário elaborador estabelece um valor mínimo para arrecadação e, caso não seja atingido ao seu término, haverá a devolução das contribuições aos usuários respectivos.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                        9.1.1. Se a campanha atingir ou superar a meta estabelecida, o valor total arrecadado será transferido para a conta do usuário elaborador da campanha, exceto por 10%, valor devido à <b>KSI</b> pelos serviços do Portal <b>KICKANTE</b> que serão automaticamente retidos no momento do envio, além de eventuais tributos incidentes e às tarifas dos arranjadores de pagamento e instituições financeiras envolvidas.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                            9.1.2. Se a campanha não atingir a meta estabelecida, haverá devolução das contribuições à conta Wirecard ou cartão de crédito do usuário colaborador em até 30 dias após encerramento da campanha, podendo ser realocada em outra campanha em andamento ou solicitar o estorno, sempre que requisitado em até 120 dias do efetivo pagamento, caso utilize PayPal, ou 170 caso utilize Wirecard, da seguinte forma:
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                            9.1.2.1. Os pagamentos realizados por cartão de crédito terão reembolso automático e o valor retornará na próxima fatura do cartão de crédito, ou fatura subsequente, de acordo com data de vencimento do cartão e data do pedido de reembolso;
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                            9.1.2.2. Pagamentos realizados por transferência bancária ou boleto, serão reembolsados por meio de transferência dos valores disponibilizados na conta do usuário para sua conta Wirecard/PayPal, além de eventuais tributos incidentes e às tarifas dos arranjadores de pagamento e instituições financeiras envolvidas.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            9.2. “Flexível”: A campanha “Flexível” é definida por período de 1 a 60 dias em que o usuário elaborador estabelece um valor mínimo para arrecadação e, caso não seja atingido ao seu término, aproveitará dos valores que foram reunidos para sua campanha.
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                        9.2.1. Se a campanha atingir ou superar a meta estabelecida, o valor total arrecadado será transferido para a conta do usuário elaborador da campanha, exceto por 10%, valor devido à <b>KSI</b> pelos serviços do Portal <b>KICKANTE</b> que serão automaticamente retidos no momento do envio, além de eventuais tributos incidentes e às tarifas dos arranjadores de pagamento e instituições financeiras envolvidas;
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                        9.2.2. Se a campanha não atingir a meta estabelecida, o valor total arrecadado será transferido para a conta do usuário elaborador da campanha, exceto por 10%, valor devido à <b>KSI</b> pelos serviços do Portal <b>KICKANTE</b> que serão automaticamente retidos no momento do envio, além de eventuais tributos incidentes e às tarifas dos arranjadores de pagamento e instituições financeiras envolvidas.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        9.3. “Contribuição Inicial <b>KSI</b>”: A <b>KSI</b> por mera liberalidade, e por acreditar nas Campanhas criadas no Portal, se compromete a realizar a primeira contribuição em toda nova Campanha lançada no Portal no valorde R$10,00 (dez reais).
                    </Description>

                        <Description marginLeft={20}>
                            &nbsp;&nbsp;&nbsp;
                        9.3.1. Este valor será visível desde o primeiro momento, porém só terá seu pagamento efetivado se a Campanha receber outra (s) contribuição (ões) que some (m) um mínimo de R$500,00 (quinhentos reais). Desta forma, a Contribuição Inicial <b>KSI</b> não será efetivada e/ou devida caso o valor final das contribuições adicionais não atinja o valor mínimo mencionado. A Kickante poderá optar por fazer contribuições iniciais maiores e o pagamento efetivo destes valores estará sempre condicionado a uma arrecadação da campanha 50 vezes maior do que o prêmio concedido.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        9.4. A <b>KSI</b> se reserva no direito de apenas fazer constar a Campanha em sua lista de Campanhas disponível para pesquisa e localização na Plataforma após a efetivação da segunda contribuição recebida.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        9.5. Todas as transações e operações utilizarão o Real Brasileiro como câmbio (BRL). O usuário elaborador da campanha é o responsável pelo pagamento de todos os impostos e taxas de serviços relacionados ao uso do Portal <b>KICKANTE</b>, podendo ser descontados automaticamente pela KSI, para evitar sonegação fiscal.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            9.6. Encerrado o período de apuração da campanha alcançando o objetivo de arrecadação (se existir), independentemente da sua espécie, a KSI transferirá os valores arrecadados ao usuário elaborador no período de até 14 dias úteis após o recebimento pelos arranjadores de pagamento. Os valores recebidos pelo usuário elaborador já estarão reduzidos dos tributos e tarifas incidentes.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        9.7. O usuário colaborador é o único responsável por acompanhar a evolução da campanha, através de informações fornecidas por seu elaborador e, subsidiariamente, por detalhes enviados pela <b>KICKANTE</b>. Por isso, está ciente que a KSI não tem nenhuma obrigação de enviar status sobre as campanhas.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        9.7.1. É de exclusiva responsabilidade do usuário colaborador averiguar se a campanha foi bem sucedida, ou não, e se houve retorno de crédito para sua conta, para que desta forma possa fazer o reinvestimento da contribuição ou solicitar o estorno. O Portal <b>KICKANTE</b> não medirá esforços para manter o usuário colaborador atualizado sobre do sucesso ou insucesso da campanha apoiada por ele, o que não representará qualquer responsabilidade por parte da <b>KSI</b>, com o que expressamente concorda seus usuários.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        9.8. Também, a <b>KSI</b> não possui qualquer responsabilidade, direta ou indireta, sobre as informações fornecidas pelo elaborador das campanhas, seja ela em relação ao seu desenvolvimento, recompensas oferecidas, tempo de execução ou relacionada a qualquer outro tipo de detalhe.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        9.9. A <b>KSI</b> não oferece nenhuma garantia em relação às contribuições realizadas pelos arranjadores de pagamento e nem responde por falhas no cartão de crédito ou transferências bancárias, já que as plataformas de pagamentos são independentes do Portal <b>KICKANTE</b>.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        9.10. Os valores reembolsados na conta do usuário que não forem estornados ou dados em apoio para outra campanha em atividade dentro do prazo de 1 ano a contar da sua devolução serão automaticamente encampados pela <b>KSI</b> e destinados à campanha Interna ou Bounty da Kickante ou na ausência de uma campanha Interna/Bounty, o valor irá para a campanha que liderar o ranking de popularidade, isto é, que possuir maior índice de atividade.
                    </Description>

                        <Divider marginTop={30} marginBottom={40} />

                        {/* 10 – Atendimento do Portal KICKANTE */}

                        <Description>
                            <b>10 – Atendimento do Portal KICKANTE</b>
                        </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        10.1. Caso os haja alguma dúvida sobre as condições estabelecidas neste termo ou qualquer documento do website, por favor, envie um e-mail para <a target="blank" href="mailto:falecom@kickante.com.br">falecom@kickante.com.br</a>. Será um prazer ajudar a esclarecer qualquer de suas dúvidas.
                    </Description>

                        <Divider marginTop={30} marginBottom={40} />

                        {/* 11 – Modificações destes Termos e Condições */}

                        <Description>
                            <b>11 – Modificações destes Termos e Condições</b>
                        </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        11.1. Os presentes Termos de Uso e Condições de Navegação estão sujeitos a constante melhoria e aprimoramento. Assim, a <b>KSI</b> se reserva o direito de modificar a qualquer momento, de forma unilateral, o presente documento e sua Política de Privacidade.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                        11.2. Ao navegar por este Portal e utilizar suas funcionalidades, você aceita guiar-se pelos Termos e Condições de Uso do Portal <b>KICKANTE</b>, e pela Política de Privacidade que se encontram vigentes na data e, portanto, deve verificar os mesmos cada vez que visitar este Portal.
                    </Description>

                        <Divider marginTop={30} marginBottom={40} />

                        {/* 12 – Disposições Gerais */}

                        <Description>
                            <b>12 – Disposições Gerais</b>
                        </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            12.1. A tolerância do eventual descumprimento de quaisquer das cláusulas e condições do presente instrumento não constituirá novação das obrigações aqui estipuladas e tampouco impedirá ou inibirá a exigibilidade das mesmas a qualquer tempo.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            12.2. Este Portal tem como base o horário oficial de Brasília.
                    </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            12.3. Caso alguma disposição destes Termos de Uso seja considerada ilegítima por autoridade da localidade que o visitante ou usuário acessa o Portal, ou mantém vínculo, as demais condições permanecerão em pleno vigor e efeito até segunda ordem.
                    </Description>

                        <Divider marginTop={30} marginBottom={40} />

                        {/* 13 – Lei aplicável e Jurisdição */}

                        <Description>
                            <b>13 – Lei aplicável e Jurisdição</b>
                        </Description>

                        <Description>
                            &nbsp;&nbsp;&nbsp;
                            13.1. Os Termos e Condições de Uso aqui descritos são interpretados segundo a legislação brasileira, no idioma português, sendo eleito o Foro da Comarca de São Paulo no Estado de São Paulo para dirimir qualquer litígio, questão ou dúvida superveniente, com expressa renúncia de qualquer outro, por mais privilegiado que seja.
                    </Description>

                        <Divider marginTop={30} marginBottom={40} />

                        <Row>
                            <Description>&nbsp;&nbsp;&nbsp;<b>Atualização:</b> 09 de Novembro de 2018.</Description>

                            <Link href="/termos">
                                <Button width={196} height={40} color={'#F2F2F2'} borderColor={'#F2F2F2'} colorHover={'#e6e6e6'}>
                                    <Description size={16} lineHeight={21} color={'rgba(68, 68, 68, 0.8)'} marginBottom={1}>
                                        Voltar
                                    </Description>
                                </Button>
                            </Link>
                        </Row>

                    </TextContainer>

                </Container>
            </Center>
            <FooterBar />
        </div>
    );
}