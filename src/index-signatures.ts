export {};

interface profile {
  underTwenty: boolean;
[index: string]: string | number | boolean;
}

let profile: profile = {name: 'Ham', underTwenty: false};

profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';