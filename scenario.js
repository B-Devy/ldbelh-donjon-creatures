export const scenario = [
    {
        numero: 0,
        texte: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe <span name='33'>Rendez-vous au paragraphe 33</span> eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum <span name='62'>Sinon, rendez-vous au paragraphe 62</span>",
        illustration: false,
        combat: false

    },
    {
        numero: 33,
        texte: " qsfqsdfodio digndfdsfissimos ducimus qui<span name='0'>Rendez-vous au paragraphe 0</span> blfdfanditiis praesentium <span name='62'>Sinon, rendez-vous au paragraphe 62</span><span name='44'>Autrement, rendez-vous au paragraphe 44</span>",
        illustration: false,
        combat: false

    },
    {
        numero: 44,
        texte: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum ",
        illustration: false,
        combat: false,
        objet: "Baguette magique"

    },
    {
        numero: 52,
        texte: " qsfqsdfodio digndfdsfissimos ducimus qui<span name='0'>Rendez-vous au paragraphe 0</span> blfdfanditiis praesentium <span name='62'>Sinon, rendez-vous au paragraphe 62</span>",
        illustration: false,
        combat: false

    },
    {
        numero: 62,
        texte: " qsdfsdf ssimos duc  sdfsdfimus qui bla <span name='0'>Rendez-vous au paragraphe 0</span> dfdfnditiis praesentium <span name='33'>Sinon, rendez-vous au paragraphe 33</span>",
        illustration: true,
        src: "./assets/squelette.bmp",
        combat: true,
        creature: {
            nom: "Squelette",
            hab: 8,
            end: 6
        }

    },
]    