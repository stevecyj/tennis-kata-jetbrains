import { Tennis } from './tennis';

describe('score', function () {
  let tennis = new Tennis();
  beforeEach(() => {
    tennis = new Tennis();
  });

  function scoreShouldBe(expected) {
    expect(tennis.score()).toBe(expected);
  }

  it('should be love all', function () {
    scoreShouldBe('love all');
  });

  it('should be fifteen love', function () {
    givenFirstPlayerScoreTimes(1);
    scoreShouldBe('fifteen love');
  });

  function givenFirstPlayerScoreTimes(times) {
    for (let i = 0; i < times; i++) {
      tennis.firstPlayerScore();
    }
  }

  it('should be thirty love', function () {
    givenFirstPlayerScoreTimes(2);
    scoreShouldBe('thirty love');
  });
});
