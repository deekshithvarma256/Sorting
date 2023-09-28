import React from "react";

export default function ButtonControl({
  changeArraySize,
  resetArray,
  insertionSort,
  quickSort,
  mergeSort,
  heapSort,
  bubbleSort,
  size,
  isPlaying,
  isSorted,
}) {
  return (
    <>
    <div className="button-container">
    <input
          type="number"
          id="shade"
          name="shade"
          min="10"
          max="150"
          className="form-range ms-3"
          onChange={changeArraySize}
          disabled={isPlaying}
        />
      <button className="btn stop m-2">
          Generate
        </button>
      <button
        className={`btn m-2 ${isSorted ? "btn-sec" : "btn-danger"}`}
        onClick={resetArray}
        disabled={isPlaying || (!isSorted && !isPlaying)}
      >
        Reset
      </button>
      <button
        className={`btn m-2 ${
          isPlaying || isSorted ? "btn-danger" : "btn-dark"
        }`}
        onClick={insertionSort}
        disabled={isPlaying || isSorted}
      >
        Insertion
      </button>
      <button
        className={`btn m-2 ${
          isPlaying || isSorted ? "btn-danger" : "btn-success"
        }`}
        onClick={quickSort}
        disabled={isPlaying || isSorted}
      >
        Quick
      </button>
      <button
        className={`btn m-2 ${
          isPlaying || isSorted ? "btn-danger" : "btn-warning"
        }`}
        onClick={mergeSort}
        disabled={isPlaying || isSorted}
      >
        Merge
      </button>
      <button
        className={`btn m-2 ${
          isPlaying || isSorted ? "btn-danger" : "btn-primary"
        }`}
        onClick={heapSort}
        disabled={isPlaying || isSorted}
      >
        Heap
      </button>
      <button
        className={`btn m-2 ${
          isPlaying || isSorted ? "btn-danger" : "btn-info"
        }`}
        onClick={bubbleSort}
        disabled={isPlaying || isSorted}
      >
        Bubble
      </button>
      <div className="ms-4">
        <label for="shade" className="form-label mt-2">
          Size {size}
        </label>
      </div>
    </div></>
  );
}
