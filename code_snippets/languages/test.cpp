template&lt;class T>
int linearSearch(T A[], T target)
{
	for (int i=0; i&lt;(sizeof(A)/sizeof(T)); i++)
	{
		if (A[i]==target)
			return i;
		else
			continue
	}
	return -1; //return -1 if not found
	cout&lt;&lt;"Target not found"&lt;&lt;endl;
}
