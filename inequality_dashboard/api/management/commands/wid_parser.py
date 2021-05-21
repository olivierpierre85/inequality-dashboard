# Parses all files from WID and loads them into the DB
from django.core.management.base import BaseCommand, CommandError
import csv
from api.models import Indicator, Country, IndicatorType

class Command(BaseCommand):
    help = 'Load pertinent data from WID (located in WID_DATA folder) into DB'

    def handle(self, *args, **options):
        # TODO open all country files in folder 
        with open('/home/olpi/projects/inequality-dashboard/WID_DATA/WID_data_AE.csv') as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=';')
            line_count = 0
            # empty previous indicators
            # Indicator.objects.all().delete()
            # get agdpro_992_i AND anninc_992_i_ with p0p100
            # diff between GDP and national income => Also external revenues

            # list of all variables needed for charts
            # variables_list = ['sptinc992j']
            # percentiles_list = ['p90p100','p0p50','p50p90','p99p100']
            indicator_types = IndicatorType.objects.all()
            useful_indicator = {}
            for i in indicator_types:
                useful_indicator[i.stat_variable] = []
                for p in i.percentiles.all():
                    useful_indicator[i.stat_variable].append(p.name)
                

            for row in csv_reader:
                if line_count == 0:
                    print(f'Column names are {", ".join(row)}')
                    line_count += 1
                else:
                    if row[1] in useful_indicator  and row[2] in useful_indicator[row[1]]:
                        q = Indicator(
                                year = row[3],
                                country = Country.objects.get(code=row[0]),
                                value = row[4],
                                indicator_type = IndicatorType.objects.filter(stat_variable=row[1]).first(),
                                percentile = row[2]
                            )
                        q.save()
                        line_count += 1
            self.stdout.write(f'Processed {line_count} lines.')

        self.stdout.write(self.style.SUCCESS('Files loaded !'))



