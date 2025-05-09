# Documento de Arquitetura Web (WAD)

## Sistema de Check-in Automático - Inteli

## Introdução

A Plataforma de Eventos é uma aplicação web desenvolvida para facilitar a criação, gerenciamento e inscrição de participantes em diversos tipos de eventos. O sistema oferece aos organizadores a capacidade de criar eventos com detalhes como título, descrição, data, horário, local e número de vagas. Para os participantes, a plataforma permite a inscrição fácil e rápida, além de oferecer notificações sobre o status das inscrições. A principal proposta é garantir a eficiência no gerenciamento de eventos e proporcionar uma experiência de inscrição intuitiva para os usuários.

### Objetivos do Sistema

- Facilitar a criação e gerenciamento de eventos, permitindo o cadastro de informações detalhadas como data, local, número de vagas e descrição
- Oferecer aos participantes a possibilidade de se inscrever nos eventos de maneira simples e ágil
- Controlar a capacidade dos eventos, garantindo que o número de participantes não exceda a capacidade máxima
- Acompanhar o status das inscrições (confirmada, pendente ou cancelada) e enviar notificações automáticas
- Gerar relatórios detalhados sobre a participação e o andamento dos eventos, auxiliando os organizadores na gestão

### Escopo

A plataforma gerencia todas as etapas do ciclo de um evento: desde a sua criação até a confirmação da participação dos inscritos. O sistema permite que os organizadores configurem eventos, definam suas características e controlem o número de participantes. Já os usuários podem se inscrever em eventos, receber notificações sobre o status da inscrição e verificar o histórico de suas participações.

### Público-alvo

- Participantes: Pessoas interessadas em se inscrever em eventos de diferentes tipos (cursos, workshops, palestras, seminários, entre outros)
- Organizadores: Responsáveis pela criação e gestão de eventos, incluindo a definição de detalhes, gerenciamento de inscrições e monitoramento do andamento dos eventos

## Diagrama do Banco de Dados

![Diagrama do Banco de Dados](../assets/modelo-checkin.svg)

### Entidades Principais

1. **Users (Usuários)**

 - Armazena informações dos participantes e administradores, como dados de autenticação, perfil e histórico de eventos.

2. **Events (Eventos)**

   - Contém os dados dos eventos, como título, descrição, data, horário, local e capacidade máxima de participantes.

3. **Subscriptions  (Inscrições)**

   - Registra as inscrições dos usuários em eventos, incluindo status da inscrição (confirmada, pendente ou cancelada) e data da inscrição.

### Relacionamentos

- Um usuário pode se inscrever em múltiplos eventos (N:N)
- Um evento pode ter múltiplas inscrições (1:N)

### Restrições Importantes

- Capacidade do Evento: Cada evento tem um número máximo de participantes, e as inscrições são bloqueadas quando essa capacidade é atingida
- Status da Inscrição: A inscrição de um participante pode ser confirmada, pendente ou cancelada, dependendo das condições do evento e do processo de seleção
- Cadastro de Usuários: Apenas usuários autenticados podem se inscrever nos eventos, e o sistema pode ter diferentes níveis de permissão (como administradores ou participantes)
