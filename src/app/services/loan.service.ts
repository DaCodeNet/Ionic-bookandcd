
export class LoanService {
  bookList = [
    {
      title: 'Enclyclopedie du savoir relatif et absolue',
      author: 'Bernard Weber',
      description: [
        "L'Encyclopédie du savoir relatif et absolu",
        "est une œuvre de fiction se présentant comme ",
        "encyclopédique, issue de l'imagination de l'écrivain français Bernard Werber."
      ],
      isLoan: true,
    },
    {
      title: 'Enclyclopedie du savoir relatif et absolue 2',
      author: 'Bernard Weber',
      description: [
      ],
      isLoan: true,
    },
    {
      title: 'Enclyclopedie du savoir relatif et absolue 3',
      author: 'Bernard Weber',
      description: [
      ],
      isLoan: true,
    }
  ];

  cdList = [
    {
      title: 'Dangerous',
      author: 'Michael Jackson',
      isLoan: true,
    },
    {
      title: '2K',
      author: 'Bruno Mars',
      isLoan: false,
    },
    {
      title: 'Exodus',
      author: 'Bob Marley',
      isLoan: false,
  }];

}
