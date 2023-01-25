select id as Id 
from Weather b
where b.temperature > (
select a.temperature  
from Weather a 
where DateDiff(b.recordDate,a.recordDate)=1
 );
