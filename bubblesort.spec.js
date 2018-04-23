describe('Bubble Sort', function(){
  let arr = [];
  beforeAll(function(){
    spyOn(window,"bubbleSort").and.callThrough();
    spyOn(window,"swap").and.callThrough();
  });

  it('handles an empty array', function(){
      expect(bubbleSort([])).toEqual([]);
  });

  it('sorts an array', function(){
      expect(bubbleSort([2,8,5,4,7,9,1,3,6])).toEqual([1,2,3,4,5,6,7,8,9]);
  });

  it('calls swap 5 times', function(){
      bubbleSort([9,1,2,3,4,5]);
      expect(swap.calls.count().toEqual(5));
  });
});

