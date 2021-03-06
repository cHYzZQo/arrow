% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/array.R
\docType{class}
\name{arrow__Array}
\alias{arrow__Array}
\alias{arrow::Array}
\title{class arrow::Array

Array base type. Immutable data array with some logical type and some length.}
\description{
class arrow::Array

Array base type. Immutable data array with some logical type and some length.
}
\section{Usage}{
\preformatted{a <- array(...)

a$IsNull(i)
a$IsValid(i)
a$length() or length(a)
a$offset()
a$null_count()
a$type()
a$type_id()
a$Equals(b)
a$ApproxEquals(b)
a$as_vector()
a$ToString()
a$Slice(offset, length = NULL)
a$RangeEquals(other, start_idx, end_idx, other_start_idx)

print(a)
a == a
}
}

\section{Methods}{

\itemize{
\item \code{$IsNull(i)}: Return true if value at index is null. Does not boundscheck
\item \code{$IsValid(i)}: Return true if value at index is valid. Does not boundscheck
\item \code{$length()}: Size in the number of elements this array contains
\item \code{$offset()}: A relative position into another array's data, to enable zero-copy slicing
\item \code{$null_count()}: The number of null entries in the array
\item \code{$type()}: logical type of data
\item \code{$type_id()}: type id
\item \code{$Equals(other)} : is this array equal to \code{other}
\item \code{$ApproxEquals(other)} :
\item \code{$data()}: return the underlying \link[=arrow__ArrayData]{arrow::ArrayData}
\item \code{$as_vector()}: convert to an R vector
\item \code{$ToString()}: string representation of the array
\item \code{$Slice(offset, length = NULL)} : Construct a zero-copy slice of the array with the indicated offset and length. If length is \code{NULL}, the slice goes until the end of the array.
\item \code{$RangeEquals(other, start_idx, end_idx, other_start_idx)} :
}
}

\keyword{datasets}
